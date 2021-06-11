const createError = require('http-errors')
const requestIp = require('request-ip')
const moment = require('moment')
const pass = require('generate-password')

// Get random Password
module.exports = async function getRandomPassword(req, res, next) {
  try {
    const { charLength } = req.query

    console.log(charLength)
    const password = pass.generate({
      length: charLength || 50,
      uppercase: true,
      numbers: true,
      symbols: true,
      lowercase: true,
      strict: true,
    })

    res.status(200).json({
      pass: password,
    })
    console.log(
      `${req.method} | ${moment(Date.now()).format()} ${requestIp.getClientIp(
        req
      )} to ${req.path} - ${JSON.stringify(req.query)}`
    )
  } catch (error) {
    return next(error)
  }
}
