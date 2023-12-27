import rateLimit from 'express-rate-limit';
import Users from '../models/schemas/User.js';

/**
 * @function createRateLimiter
 * @description Create and return the rate limiter middleware.
 * @returns {Function} Express middleware for rate limiting.
 *
 * @example
 * // Basic usage
 * const limiter = createRateLimiter();
 * app.use('/api/route', limiter);
 *
 * @example
 * // Customized options
 * const customOptions = {
 *   windowMs: 15 * 60 * 1000, // 15 minutes
 *   max: 100, // limit each IP to 100 requests per windowMs
 *   message: 'Too many requests from this IP, please try again after a few minutes.',
 * };
 * const customLimiter = createRateLimiter(customOptions);
 * app.use('/api/customRoute', customLimiter);
 */
const createRateLimiter = () => {
  /**
   * @typedef {Object} RateLimitOptions
   * @property {number} [windowMs=60 * 1000] - The time window for which the requests are checked/metered (in milliseconds).
   * @property {function|number} [max=20] - The maximum number of allowed requests within the windowMs time frame. Can be a function that receives the request object.
   * @property {string|object} [message] - The message sent in the response when the limit is exceeded.
   * @property {number} [message.status=429] - The HTTP status code to be set in the response.
   * @property {string} [message.message='You've exhausted your ratelimit, please try again later.'] - The message to be sent in the response.
   */

  /**
   * @type {RateLimitOptions}
   */
  const defaultOptions = {
    windowMs: 60 * 1000, // 1 minute
    max: async (req) => {
      try {
        // Get the user's token from the request headers
        const token = req.headers.authorization;

        // Fetch user data from the database based on the token
        const user = await Users.findOne({ token });

        // Return the user's rate limit from the database or default to 20 if not found
        return user ? user.rateLimit : 20;
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        return 20; // Default to 20 if there is an error
      }
    },
    message: {
      status: 429,
      message: 'You\'ve exhausted your ratelimit, please try again later.',
    },
  };

  // Create and configure the rate limiter middleware
  const limiter = rateLimit(defaultOptions);

  return limiter;
};

export default createRateLimiter;
