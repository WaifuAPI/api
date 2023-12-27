// routes/index.js
import { Router } from 'express';
import factRoutes from './textUtilities/fact.js';

/**
 * Express Router for handling API routes.
 * @type {Router}
 * @namespace routes
 */
const router = Router();

/**
 * @api {use} v1/fact Use Fact Routes
 * @apiDescription Mount the fact-related routes for handling text utilities.
 * @apiName UseFactRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Fact-related routes mounted on the parent router.
 *
 * @function createFactRoutes
 * @description Creates and returns a set of routes for handling text utilities related to facts.
 * @returns {Object} Fact-related routes.
 */

router.use('/fact', factRoutes);

/**
 * Exporting the router for use in other parts of the application.
 * @exports {Router} router - Express Router instance with mounted routes.
 */
export default router;
