const createError = require('http-errors')
const Pout = require('../../models/schemas/Pout')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Pout
module.exports = async function getRandomPout(req, res, next) {
  try {
    const [result] = await Pout.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Pout Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { pout: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
