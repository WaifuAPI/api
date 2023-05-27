const createError = require('http-errors')
const Angry = require('../../models/schemas/Angry')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Angry
module.exports = async function getRandomAngry(req, res, next) {
  try {
    const [result] = await Angry.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Angry Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { angry: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
