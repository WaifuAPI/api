const createError = require('http-errors')
const Glomp = require('../../models/schemas/Glomp')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Glomp
module.exports = async function getRandomGlomp(req, res, next) {
  try {
    const [result] = await Glomp.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Glomp Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { glomp: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
