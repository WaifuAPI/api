const createError = require('http-errors')
const requestIp = require('request-ip')
const moment = require('moment')
const Quotes = require('../../models/schemas/Quotes')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Quote
module.exports = async function getRandomQuote(req, res, next) {
  try {
    const { character } = req.query

    const filter = {}

    if (character) {
      filter.author = character
    }

    const [result] = await Quotes.aggregate([
      // Apply filters (if any)
      { $match: filter },
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any matching Quote'))
    }

    res.status(200).json(result)
    console.log(
      `${req.method} | ${moment(Date.now()).format()} ${requestIp.getClientIp(
        req
      )} to ${req.path} - ${JSON.stringify(req.query)}`
    )
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { quotes: 1 } }
    )
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
