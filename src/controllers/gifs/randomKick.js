const createError = require('http-errors')
const Kick = require('../../models/schemas/Kick')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Kick
module.exports = async function getRandomKick(req, res, next) {
  try {
    const [result] = await Kick.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Kick Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { kick: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
