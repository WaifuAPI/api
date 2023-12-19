import createError from 'http-errors';
import chalk from 'chalk';

// Handles 404 errors
export const handle404 = (req, res, next) => {
  next(createError(404, 'The requested resource could not be found'));
};

export const logErrors = (error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable-next-line no-console */
    console.error(chalk.red('[ERROR]'), error.stack);
  }
  next(error);
};

// Sends error response to client
export const errorHandler = (error, req, res, next) => {
  const statusCode = error.status || 500;
  const statusMessage = error.message || 'Internal server error';
  res.status(statusCode).json({ statusCode, statusMessage });
};
