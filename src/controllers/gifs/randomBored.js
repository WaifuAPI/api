const createError = require('http-errors')
const Bored = require('../../models/schemas/Bored')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Bored
module.exports = async function getRandomBored(req, res, next) {
  try {
    const [result] = await Bored.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Bored Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { bored: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
