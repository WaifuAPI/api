import { Router } from 'express';
import getQuote from '../../../controllers/v4/textUtilities/quote.js';
import createRateLimiter from '../../../middlewares/rateLimit.js';
import authorize from '../../../middlewares/authorize.js';
import incrementData from '../../../middlewares/database/add.js';
import updateData from '../../../middlewares/database/update.js';
import deleteData from '../../../middlewares/database/delete.js';

const router = Router();

router
  .route('/')
  /**
   * @api {get} v4/quote Get a Random Quote
   * @apiDescription Retrieve a random quote.
   * @apiName getQuote
   * @apiGroup Quote
   * @apiPermission user
   *
   * @apiHeader {String} Authorization User's access token.
   *
   * @apiSuccess {Object} quote Random quote object.
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data.
   * @apiError (Forbidden 403) Forbidden Only users can access the data.
   * @apiError (Too Many Requests 429) TooManyRequests The client has exceeded the allowed number of requests within the time window.
   * @apiError (Internal Server Error 500) InternalServerError An error occurred while processing the rate limit.
   *
   * @function createRateLimit
   * @description Creates a rate limiter middleware to control the frequency of requests.
   * @returns {function} Express middleware function that handles rate limiting.
   *
   */
  .get(authorize(config.roles.USER), createRateLimiter(), getQuote)
  /**
   * @api {post} v4/quote Increment Quote Data
   * @apiDescription Increment data related to quotes (only accessible by database moderators).
   * @apiName IncrementQuoteData
   * @apiGroup Quote
   * @apiPermission database_moderator
   *
   * @apiHeader {String} Authorization Database Moderator's access token.
   *
   * @apiSuccess {Object} result Result of the data incrementation.
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated database moderator can access the data.
   * @apiError (Forbidden 403) Forbidden Only users can access the data.
   * @apiError (Too Many Requests 429) TooManyRequests The client has exceeded the allowed number of requests within the time window.
   * @apiError (Internal Server Error 500) InternalServerError An error occurred while processing the rate limit.
   *
   * @function createRateLimit
   * @description Creates a rate limiter middleware to control the frequency of requests.
   * @returns {function} Express middleware function that handles rate limiting.
   *
   */
  .post(authorize(config.roles.DB_MOD), createRateLimiter(), incrementData('Quote'));

router
  .route('/:id')
  /**
   * @api {patch} v4/quote/:id Update Quote Data
   * @apiDescription Update data related to quotes with a specific ID (only accessible by database moderators).
   * @apiName UpdateQuoteData
   * @apiGroup Quote
   * @apiPermission database_moderator
   *
   * @apiHeader {String} Authorization database moderator access token.
   *
   * @apiSuccess {Object} result Result of the data update.
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated database moderator can access the data.
   * @apiError (Forbidden 403) Forbidden Only users can access the data.
   * @apiError (Too Many Requests 429) TooManyRequests The client has exceeded the allowed number of requests within the time window.
   * @apiError (Internal Server Error 500) InternalServerError An error occurred while processing the rate limit.
   *
   * @function createRateLimit
   * @description Creates a rate limiter middleware to control the frequency of requests.
   * @returns {function} Express middleware function that handles rate limiting.
   */
  .patch(authorize(config.roles.DB_MOD), createRateLimiter(), updateData('Quote'))
  /**
   * @api {delete} v4/quote/:id Delete Quote Data
   * @apiDescription Delete data related to quotes with a specific ID (only accessible by admins).
   * @apiName DeleteQuoteData
   * @apiGroup Quote
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization Admin's access token.
   *
   * @apiSuccess {Object} result Result of the data deletion.
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated admins can access the data.
   * @apiError (Forbidden 403) Forbidden Only users can access the data.
   * @apiError (Too Many Requests 429) TooManyRequests The client has exceeded the allowed number of requests within the time window.
   * @apiError (Internal Server Error 500) InternalServerError An error occurred while processing the rate limit.
   *
   * @function createRateLimit
   * @description Creates a rate limiter middleware to control the frequency of requests.
   * @returns {function} Express middleware function that handles rate limiting.
   */
  .delete(authorize(config.roles.ADMIN), createRateLimiter(), deleteData('Quote'));

// Export the router
export default router;
