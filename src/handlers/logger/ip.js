// const fs = require('fs')
const requestIp = require('request-ip')
const { Webhook  } = require('discord-webhook-node');
const hook = new Webhook(process.env.DISCORD_WEBHOOK_URL);

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
  const IMAGE_URL = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
  hook.setUsername('API Logger');
  hook.setAvatar(IMAGE_URL);
  hook.send(`\`${log}\``);

  // fs.appendFile('./logs/ip-logs.log', log, err => {
  //   if (err) throw err
  // })
  console.log(log)

  next()
}
