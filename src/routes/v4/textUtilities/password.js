import { Router } from 'express';
import getPassword from '../../../controllers/v4/textUtilities/password.js';
import createRateLimiter from '../../../middlewares/rateLimit.js';

const router = Router();

router
  .route('/')
  /**
   * @api {get} v4/password Generate Random Password
   * @apiDescription Generates a random password.
   * @apiName getPassword
   * @apiGroup TextUtilities
   * @apiPermission global
   *
   * @apiSuccess {String} password Randomly generated password.
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data.
   * @apiError (Forbidden 403) Forbidden Only authorized users can access the data.
   * @apiError (Too Many Requests 429) TooManyRequests The client has exceeded the allowed number of requests within the time window.
   * @apiError (Internal Server Error 500) InternalServerError An error occurred while processing the rate limit.
   *
   * @api {function} createRateLimiter
   * @apiDescription Creates a rate limiter middleware to control the frequency of requests.
   * @apiSuccess {function} middleware Express middleware function that handles rate limiting.
   *
   */
  .get(createRateLimiter(), getPassword);

// Export the router
export default router;
