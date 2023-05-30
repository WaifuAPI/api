const createError = require('http-errors')
const uwuify = require('owoify-js')
const Stats = require('../../models/schemas/Stat')

module.exports = async function getOwofiyText(req, res, next) {
  try {
    const { text } = req.query

    if (!text) {
      return next(createError(404, 'Invalid text input.'))
    }
    res.status(200).json({
      text: uwuify(text),
    })

    return await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { uwuify: 1 } }
    )
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}