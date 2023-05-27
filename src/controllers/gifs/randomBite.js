const createError = require('http-errors')
const Bite = require('../../models/schemas/Bite')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Bite
module.exports = async function getRandomBite(req, res, next) {
  try {
    const [result] = await Bite.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Bite Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { bite: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
