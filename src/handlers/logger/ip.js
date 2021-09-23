// const fs = require('fs')
const requestIp = require('request-ip')

// Logger In One File
module.exports.ipLogger = function ipLogger(req, res, next) {
  let auth = req.headers.auth
  if (!auth) {
    auth = 'Null Auth'
  }
  const log = `${new Date()} - STATUS=${res.statusCode} - METHOD=${
    req.method
  } - IP=${req.ip} | ${requestIp.getClientIp(req)} - URL=${
    req.originalUrl
  } - ${auth}\n`

  // fs.appendFile('./logs/ip-logs.log', log, err => {
  //   if (err) throw err
  // })
  console.log(log)

  next()
}
