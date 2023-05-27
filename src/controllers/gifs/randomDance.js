const createError = require('http-errors')
const Dance = require('../../models/schemas/Dance')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Dance
module.exports = async function getRandomDance(req, res, next) {
  try {
    const [result] = await Dance.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Dance Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { dance: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
