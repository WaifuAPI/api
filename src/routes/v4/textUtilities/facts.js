// routes/index.js
import { Router } from 'express';
import getRandomFact from '../../../controllers/v3/facts/randomFacts.js';
import authorize from '../../../middlewares/authorize.js';
import incrementData from '../../../modules/database/add.js';

const router = Router();

router
  .route('/')
  /**
   * @api {get} v4/fact Get a Random Fact
   * @apiDescription Retrieve a random fact.
   * @apiVersion 4.0.0
   * @apiName GetRandomFact
   * @apiGroup Fact
   * @apiPermission user
   *
   * @apiHeader {String} Authorization User's access token.
   *
   * @apiSuccess {Object[]} users List of users.
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data.
   * @apiError (Forbidden 403) Forbidden Only users can access the data.
   */
  .get(authorize(config.roles.USER), getRandomFact)
  /**
   * @api {post} v4/fact Increment Fact Data
   * @apiDescription Increment data related to facts (only accessible by admins).
   * @apiVersion 4.0.0
   * @apiName IncrementFactData
   * @apiGroup Fact
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization Admin's access token.
   *
   * @apiSuccess {Object} result Result of the data incrementation.
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated admins can access the data.
   * @apiError (Forbidden 403) Forbidden Only admins can access the data.
   */
  .post(authorize(config.roles.ADMIN), incrementData('Fact'));

// Export the router
export default router;