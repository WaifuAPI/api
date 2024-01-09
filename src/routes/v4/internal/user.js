import { Router } from 'express';
import { userEndpoint, retrieveAndUpdateUserProfile } from '../../../controllers/v4/internal/user.js';
import createRateLimiter from '../../../middlewares/rateLimit.js';

const router = Router();

router
  .route('/')
  /**
   * @api {post} v4/user Get User Details
   * @apiDescription Get details about the authenticated user.
   * @apiName getUserDetails
   * @apiGroup UserManagement
   * @apiPermission user
   *
   * @apiHeader {String} Authorization User's access token.
   *
   * @apiSuccess {Object} userDetails User's details.
   * @apiSuccess {String} userDetails.username User's username.
   * @apiSuccess {String} userDetails.email User's email address.
   * @apiSuccess {String} userDetails.avatar User's avatar URL.
   * @apiSuccess {Date} userDetails.createdAt Date when the user profile was created.
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
  .post(createRateLimiter(), userEndpoint);

router
  .route('/profile/:id')
  /**
   * @api {get} v4/user/profile/:id Get User Profile
   * @apiDescription Get the profile of a specific user.
   * @apiName retrieveAndUpdateUserProfile
   * @apiGroup UserManagement
   * @apiPermission user
   *
   * @apiHeader {String} Authorization User's access token.
   *
   * @apiParam {String} id User's unique identifier.
   *
   * @apiSuccess {Object} userProfile User's profile information.
   * @apiSuccess {String} userProfile.username User's username.
   * @apiSuccess {String} userProfile.email User's email address.
   * @apiSuccess {String} userProfile.avatar User's avatar URL.
   * @apiSuccess {Date} userProfile.createdAt Date when the user profile was created.
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
  .get(createRateLimiter(), retrieveAndUpdateUserProfile);

// Export the router
export default router;
