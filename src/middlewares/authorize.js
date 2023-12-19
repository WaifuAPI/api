import createError from 'http-errors';
import Users from '../models/schemas/User.js';
import Stats from '../models/schemas/Stat.js';

/**
 * Middleware for handling user authentication and request validation.
 * @param {string} requiredRole - The required role to access the endpoint.
 * @returns {function} - Express middleware function.
 */
const authorize = (requiredRole) => async (req, res, next) => {
  try {
    // Extract API key from request headers
    const key = req.headers.authorization;

    // Verify if the API key exists in the database
    const userData = await Users.findOne({ token: key });

    // Update request quotas and count
    const updateData = {
      $inc: {
        req_quoto: userData && userData.req_quoto > 0 ? -1 : 0,
        req_count: userData ? 1 : 0,
      },
    };
    await Users.updateOne({ token: key }, updateData);

    // Handle case where the user has not provided a valid token
    if (!userData) {
      await incrementSystemStats({
        failed_requests: 1,
        endpoints_requests: 1,
        daily_requests: 1,
      });
      return next(
        createError(
          401,
          'Invalid API key. Go to https://docs.waifu.it for more info.'
        )
      );
    }

    // Handle case where the user is banned
    if (userData.banned) {
      await incrementSystemStats({
        banned_requests: 1,
        endpoints_requests: 1,
        daily_requests: 1,
      });
      return next(createError(403, "You've been banned from using the API."));
    }

    // Handle case where the request limit is exhausted [Currently Disabled]
    if (userData.req_quoto <= 0) {
      return next(
        createError(
          403,
          "You've exhausted your request limits. Buy Premium to increase it more."
        )
      );
    }

    // Check if the user has the required role
    if (!userData.roles.includes(requiredRole)) {
      return next(createError(403, 'Insufficient privileges to access this endpoint.'));
    }

    // Increment system stats for successful requests
    await incrementSystemStats({
      endpoints_requests: 1,
      success_requests: 1,
      daily_requests: 1,
    });

    // Call the next middleware
    return next();
  } catch (error) {
    // Pass any caught errors to the error handler
    return next(error);
  }
};

/**
 * Increment the specified statistics in the system stats collection.
 * @param {Object} stats - Statistics to be incremented.
 * @returns {Promise<void>} - Resolves when the stats are updated.
 */
const incrementSystemStats = async (stats) => {
  await Stats.findByIdAndUpdate({ _id: 'systemstats' }, { $inc: stats });
};

export default authorize;
