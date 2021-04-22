const fs = require('fs')
// Logger In One File
module.exports.ipLogger = function ipLogger(req, res, next) {
  const log = `${new Date()}  |  IP=${req.ip}  | STATUS=${
    res.statusCode
  } | URL=${req.originalUrl} | METHOD=${req.method}\n`

  fs.appendFile('./logs/ip-logs.log', log, err => {
    if (err) throw err
  })

  next()
}
