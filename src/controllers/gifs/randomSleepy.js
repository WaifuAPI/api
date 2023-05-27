const createError = require('http-errors')
const Sleepy = require('../../models/schemas/Sleepy')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Sleepy
module.exports = async function getRandomSleepy(req, res, next) {
  try {
    const [result] = await Sleepy.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Sleepy Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { sleepy: 1 } }
    )
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
