const createError = require('http-errors')
const requestIp = require('request-ip')
const moment = require('moment')
const Smug = require('../../models/schemas/Smug')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Smug
module.exports = async function getRandomSmug(req, res, next) {
  try {
    const [result] = await Smug.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Smug Gif'))
    }

    res.status(200).json(result)
    console.log(
      `${req.method} | ${moment(Date.now()).format()} ${requestIp.getClientIp(
        req
      )} to ${req.path} - ${JSON.stringify(req.query)}`
    )
    await Stats.findOneAndUpdate (
      { _id: "systemstats" },
      { $inc: {  smug: 1 } },
    )
  } catch (error) {
    await Stats.findOneAndUpdate (
      { _id: "systemstats" },
      { $inc: { failed_requests: 1 } },
    )
    return next(error)
  }
}
