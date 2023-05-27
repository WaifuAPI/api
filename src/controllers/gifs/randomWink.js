const createError = require('http-errors')
const Wink = require('../../models/schemas/Wink')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Wink
module.exports = async function getRandomWink(req, res, next) {
  try {
    const [result] = await Wink.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Wink Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { wink: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
