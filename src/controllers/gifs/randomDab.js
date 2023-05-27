const createError = require('http-errors')
const Dab = require('../../models/schemas/Dab')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Dab
module.exports = async function getRandomDab(req, res, next) {
  try {
    const [result] = await Dab.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Dab Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { dab: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
