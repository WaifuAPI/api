const createError = require('http-errors')
const Bonk = require('../../models/schemas/Bonk')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Bonk
module.exports = async function getRandomBonk(req, res, next) {
  try {
    const [result] = await Bonk.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Bonk Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { bonk: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
