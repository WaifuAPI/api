const createError = require('http-errors')
const Laugh = require('../../models/schemas/Laugh')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Laugh
module.exports = async function getRandomLaugh(req, res, next) {
  try {
    const [result] = await Laugh.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Laugh Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { laugh: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
