import rateLimit from 'express-rate-limit';
import Users from '../models/schemas/Users.js';

/**
 * Create and return the rate limiter middleware.
 *
 * @returns {Function} Express middleware for rate limiting.
 */
const createRateLimiter = () => {
  return rateLimit({
    windowMs: 60 * 1000, // 1 minute window for rate limiting
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
  });
};

export default createRateLimiter;
