import { Router } from 'express';
import getRandomSip from '../../../controllers/v4/interactions/sip.js';
import createRateLimiter from '../../../middlewares/rateLimit.js';
import authorize from '../../../middlewares/authorize.js';
import incrementData from '../../../middlewares/database/add.js';
import updateData from '../../../middlewares/database/update.js';
import deleteData from '../../../middlewares/database/delete.js';

const router = Router();

router
  .route('/')
  /**
   * @api {get} v4/sip Get a Random Sip
   * @apiDescription Retrieve a random sip.
   * @apiName GetRandomSip
   * @apiGroup Sip
   * @apiPermission user
   *
   * @apiHeader {String} Authorization User's access token.
   *
   * @apiSuccess {Object[]} users List of users.
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
  .get(authorize(config.roles.USER), createRateLimiter(), getRandomSip)
  /**
   * @api {post} v4/sip Increment Sip Data
   * @apiDescription Increment data related to sips (only accessible by database moderators).
   * @apiName IncrementSipData
   * @apiGroup Sip
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
  .post(authorize(config.roles.DB_MOD), createRateLimiter(), incrementData('Sip'));

router
  .route('/:id')
  /**
   * @api {patch} v4/sip/:id Update Sip Data
   * @apiDescription Update data related to sips with a specific ID (only accessible by database moderators).
   * @apiName UpdateSipData
   * @apiGroup Sip
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
  .patch(authorize(config.roles.DB_MOD), createRateLimiter(), updateData('Sip'))
  /**
   * @api {delete} v4/sip/:id Delete Sip Data
   * @apiDescription Delete data related to sip with a specific ID (only accessible by admins).
   * @apiName DeleteSipData
   * @apiGroup Sip
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
  .delete(authorize(config.roles.ADMIN), createRateLimiter(), deleteData('Sip'));
// Export the router
export default router;
