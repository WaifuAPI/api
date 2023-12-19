/*** Importing necessary modules ***/
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

/*** Importing custom error handlers and logger middleware ***/
import {
  handle404,    /*** @params: req, res, next ***/
  logErrors,    /*** @params: err, req, res, next ***/
  errorHandler, /*** @params: err, req, res, next ***/
} from './middlewares/errors.js';
import { logIP } from './middlewares/logger.js';
import routesV3 from './routes/v3/index.js';
import routesV4 from './routes/v4/index.js';

/*** Creating an instance of Express ***/
const app = express();

/*** Enabling CORS for all routes ***/
app.use(cors());

/*** Trusting the first proxy (when running behind a reverse proxy like Nginx) ***/
app.set('trust proxy', 1);

/*** Middleware to parse JSON-encoded bodies ***/
app.use(express.json());

/*** Middleware to parse URL-encoded bodies ***/
app.use(express.urlencoded({ extended: true }));

/*** Logger middleware ***/
/**
 * @middleware
 * @description Enables IP logging for incoming requests.
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
if (process.env.LOGGER === 'true') {
  app.use(logIP);
}

/*** Middleware to parse the request body ***/
app.use(bodyParser.json());

/*** Custom API routes ***/
app.use('/api/v4', routesV4);
app.use(routesV3);

/**
 * @apiMiddleware
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 *
 * @apiSuccess {Object[]} response - Response data.
 *
 * @apiError {BadRequest} BadRequest - Invalid request parameters.
 * @apiError {Unauthorized} Unauthorized - Only authenticated users can access the data.
 * @apiError {Forbidden} Forbidden - Only authorized users can access the data.
 * @apiError {NotFound} NotFound - The requested resource was not found.
 * @apiError {InternalServerError} InternalServerError - Something went wrong on the server.
 */
app.use(handle404, logErrors, errorHandler);

/*** Exporting the Express app instance ***/
export default app;