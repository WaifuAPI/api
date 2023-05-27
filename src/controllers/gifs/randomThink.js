const createError = require('http-errors')
const Think = require('../../models/schemas/Think')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Think
module.exports = async function getRandomThink(req, res, next) {
  try {
    const [result] = await Think.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Think Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { think: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
