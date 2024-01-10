import { Router } from 'express';
import listTags from '../../../controllers/v4/textUtilities/listTags.js';
import createRateLimiter from '../../../middlewares/rateLimit.js';
import authorize from '../../../middlewares/authorize.js';

const router = Router();

router
  .route('/')
  /**
   * @api {get} v4/listTags List Tags
   * @apiDescription Retrieve a list of tags.
   * @apiName listTags
   * @apiGroup TextUtilities
   * @apiPermission user
   *
   * @apiHeader {String} Authorization User's access token.
   *
   * @apiSuccess {String} owoifiedText Owoified version of the input text.
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
  .get(authorize(config.roles.USER), createRateLimiter(), listTags);

// Export the router
export default router;
