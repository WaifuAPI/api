const createError = require('http-errors')
const Lurk = require('../../models/schemas/Lurk')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Lurk
module.exports = async function getRandomLurk(req, res, next) {
  try {
    const [result] = await Lurk.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Lurk Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { lurk: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
