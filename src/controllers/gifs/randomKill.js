const createError = require('http-errors')
const Kill = require('../../models/schemas/Kill')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Kill
module.exports = async function getRandomKill(req, res, next) {
  try {
    const [result] = await Kill.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Kill Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { kill: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
