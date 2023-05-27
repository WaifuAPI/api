const createError = require('http-errors')
const Run = require('../../models/schemas/Run')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Run
module.exports = async function getRandomRun(req, res, next) {
  try {
    const [result] = await Run.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Run Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { run: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
