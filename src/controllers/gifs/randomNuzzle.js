const createError = require('http-errors')
const Nuzzle = require('../../models/schemas/Nuzzle')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Nuzzle
module.exports = async function getRandomNuzzle(req, res, next) {
  try {
    const [result] = await Nuzzle.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Nuzzle Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { nuzzle: 1 } }
    )
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
