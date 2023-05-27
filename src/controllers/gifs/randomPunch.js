const createError = require('http-errors')
const Punch = require('../../models/schemas/Punch')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Punch
module.exports = async function getRandomPunch(req, res, next) {
  try {
    const [result] = await Punch.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Punch Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { punch: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
