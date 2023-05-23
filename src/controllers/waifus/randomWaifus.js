const Waifus = require('../../models/schemas/Waifus')
const moment = require('moment')
const Stats = require('../../models/schemas/Stat')

// Get a random waifu
module.exports = async function getRandomWaifu(req, res, next) {
  try {
    const [result] = await Waifus.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0 } },
    ])

    res.status(200).json(result)
    console.log(
      `${req.method} | ${moment(Date.now()).format()} ${requestIp.getClientIp(
        req
      )} to ${req.path} - ${JSON.stringify(req.query)}`
    )
    await Stats.findOneAndUpdate (
      { _id: "systemstats" },
      { $inc: { waifus: 1 } },
    )
  } catch (error) {
    await Stats.findOneAndUpdate (
      { _id: "systemstats" },
      { $inc: { failed_requests: 1 } },
    )
    return next(error)
  }
}
