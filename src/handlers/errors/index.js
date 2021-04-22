const createError = require('http-errors')
const chalk = require('chalk')

// Handles 404 errors
module.exports.handler404 = function handler404(req, res, next) {
  return next(createError(404, 'The requested resource could not be found'))
}

module.exports.errorsLogger = function errorsLogger(error, req, res, next) {
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable-next-line no-console */
    console.error(chalk.red('[ERROR]'), error.stack)
  }
  return next(error)
}

// Sends error response to client
module.exports.errorsHandler = function errorsHandler(error, req, res, next) {
  const statusCode = error.status || 500
  const statusMessage = error.message || 'Internal server error'
  res.status(statusCode).json({ statusCode, statusMessage })
}
