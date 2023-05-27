const createError = require('http-errors')
const Pat = require('../../models/schemas/Pat')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Pat
module.exports = async function getRandomPat(req, res, next) {
  try {
    const [result] = await Pat.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Pat Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { pat: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
