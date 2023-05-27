const express = require('express')
const cors = require('cors')
// const winston = require('winston')
// const expressWinston = require('express-winston')
// const requestIp = require('request-ip');
const routes = require('./routes')
const {
  handler404,
  errorsLogger,
  errorsHandler,
} = require('./handlers/errors/index')
require('winston-daily-rotate-file')
const { ipLogger } = require('./handlers/logger/ip')
const path = require('path')

// Express APP
const app = express()
app.use(cors())
app.set('trust proxy', 1)

// Logger
if (process.env.LOGGER === 'true') {
  app.use(ipLogger)
}

// Main website (waifu.it)
app.use('/', express.static(path.join(__dirname, 'frontend')))

app.use(routes)
app.use(handler404, errorsLogger, errorsHandler)

module.exports = app
