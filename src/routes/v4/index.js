// routes/index.js
import { Router } from 'express';
import factRoutes from './textUtilities/fact.js';
import listTagsRoutes from './textUtilities/listTags.js';
import owoifyRoutes from './textUtilities/owoify.js';
import passwordRoutes from './textUtilities/password.js';
import uvuifyRoutes from './textUtilities/uvuify.js';
import uwuifyRoutes from './textUtilities/uwuify.js';

/**
 * Express Router for handling API routes.
 * @type {Router}
 * @namespace routes
 */
const router = Router();

/**
 * @api {use} v4/fact Use Fact Routes
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
 * @api {use} v4/listTags Use ListTags Routes
 * @apiDescription Mount the listTags-related routes for handling text utilities.
 * @apiName UseListTagsRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes ListTags-related routes mounted on the parent router.
 *
 * @function createListTagsRoutes
 * @description Creates and returns a set of routes for handling text utilities related to listTags.
 * @returns {Object} ListTags-related routes.
 */
router.use('/listTags', listTagsRoutes);

/**
 * @api {use} v4/owoify Use Owoify Routes
 * @apiDescription Mount the owoify-related routes for handling text utilities.
 * @apiName UseOwoifyRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Owoify-related routes mounted on the parent router.
 *
 * @function createOwoifyRoutes
 * @description Creates and returns a set of routes for handling text utilities related to owoify.
 * @returns {Object} Owoify-related routes.
 */
router.use('/owoify', owoifyRoutes);

/**
 * @api {use} v4/password Use Password Routes
 * @apiDescription Mount the password-related routes for handling text utilities.
 * @apiName UsePasswordRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Password-related routes mounted on the parent router.
 *
 * @function createPasswordRoutes
 * @description Creates and returns a set of routes for handling text utilities related to password.
 * @returns {Object} Password-related routes.
 */
router.use('/password', passwordRoutes);

/**
 * @api {use} v4/uvuify Use Uvuify Routes
 * @apiDescription Mount the uvuify-related routes for handling text utilities.
 * @apiName UseUvuifyRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Uvuify-related routes mounted on the parent router.
 *
 * @function createUvuifyRoutes
 * @description Creates and returns a set of routes for handling text utilities related to uvuify.
 * @returns {Object} Uvuify-related routes.
 */
router.use('/uvuify', uvuifyRoutes);

/**
 * @api {use} v4/uwuify Use Uwuify Routes
 * @apiDescription Mount the uwuify-related routes for handling text utilities.
 * @apiName UseUwuifyRoutes
 * @apiGroup Routes
 *
 * @apiSuccess {Object} routes Uwuify-related routes mounted on the parent router.
 *
 * @function createUwuifyRoutes
 * @description Creates and returns a set of routes for handling text utilities related to uwuify.
 * @returns {Object} Uwuify-related routes.
 */
router.use('/uwuify', uwuifyRoutes);

/**
 * Exporting the router for use in other parts of the application.
 * @exports {Router} router - Express Router instance with mounted routes.
 */
export default router;
