import createError from 'http-errors';
import chalk from 'chalk';

/**
 * Middleware to handle 404 errors.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const handle404 = (req, res, next) => {
  next(createError(404, 'The requested resource could not be found'));
};

/**
 * Middleware to log errors.
 * @param {Error} error - The error object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const logErrors = (error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable-next-line no-console */
    console.error(chalk.red('[ERROR]'), error.stack);
  }
  next(error);
};

/**
 * Middleware to send error response to the client.
 * @param {Error} error - The error object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const errorHandler = (error, req, res, next) => {
  const statusCode = error.status || 500;
  const statusMessage = error.message || 'Internal server error';
  res.status(statusCode).json({ statusCode, statusMessage });
};
