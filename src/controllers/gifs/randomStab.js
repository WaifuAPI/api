const createError = require('http-errors')
const Stab = require('../../models/schemas/Stab')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Stab
module.exports = async function getRandomStab(req, res, next) {
  try {
    const [result] = await Stab.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Stab Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { stab: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
