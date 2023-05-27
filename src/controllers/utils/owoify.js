const createError = require('http-errors')
const requestIp = require('request-ip')
const owoify = require('owoify-js').default
const Stats = require('../../models/schemas/Stat')

module.exports = async function getOwofiyText(req, res, next) {
  try {
    const { text } = req.query

    if (!text) {
    return next(createError(404, 'Invalid text input.'))
    }
    res.status(200).json({
      text: owoify(text),
    })
    console.log(
      `${req.method} | ${moment(Date.now()).format()} ${requestIp.getClientIp(
        req
      )} to ${req.path} - ${JSON.stringify(req.query)}`
    )
    return await Stats.findOneAndUpdate (
      { _id: "systemstats" },
      { $inc: { owoify: 1 } },
    )
  } catch (error) {
    await Stats.findOneAndUpdate (
      { _id: "systemstats" },
      { $inc: { failed_requests: 1 } },
    )
    return next(error)
  }
}
