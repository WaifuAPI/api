const createError = require('http-errors')
const Disgust = require('../../models/schemas/Disgust')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Disgust
module.exports = async function getRandomDisgust(req, res, next) {
  try {
    const [result] = await Disgust.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Disgust Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { disgust: 1 } }
    )
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
