const createError = require('http-errors')
const Bye = require('../../models/schemas/Bye')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Bye
module.exports = async function getRandomBye(req, res, next) {
  try {
    const [result] = await Bye.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Bye Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { bye: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
