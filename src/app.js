const express = require('express')
const cors = require('cors')
const winston = require('winston')
const expressWinston = require('express-winston')
const requestIp = require('request-ip')
const routes = require('./routes')
const {
  handler404,
  errorsLogger,
  errorsHandler,
} = require('./handlers/errors/index')
require('winston-daily-rotate-file')

const { ipLogger } = require('./handlers/logger/ip')

// Express APP
const app = express()
app.use(cors())
app.set('trust proxy', 1)

// Logger
if (process.env.LOGGER === 'true') {
  const transport = new winston.transports.DailyRotateFile({
    filename: 'logs/requests/%DATE%.log',
    datePattern: 'DD-MM-YYYY',
    zippedArchive: false,
    maxSize: '20m',
    maxFiles: '14d',
  })

  app.use(
    expressWinston.logger({
      transports: [transport],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
      meta: true,
      msg(req, res) {
        return `${res.statusCode} - ${req.method} - ${
          res.responseTime
        }ms - IP: ${req.ip} IPs: ${requestIp.getClientIp(req)}`
      },
      expressFormat: true,
      colorize: false,
      ignoreRoute(req, res) {
        return false
      },
    })
  )
}

// Main website (animu.ml)
app.get('/', (req, res) => {
  res.json({
    code: '200',
    message:
      'Join the support server to get auth token https://discord.gg/yyW389c',
  })
})
app.use(ipLogger)
app.use(routes)
app.use(handler404, errorsLogger, errorsHandler)

module.exports = app
