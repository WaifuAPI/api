const createError = require('http-errors')
const Baka = require('../../models/schemas/Baka')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Baka
module.exports = async function getRandomBaka(req, res, next) {
  try {
    const [result] = await Baka.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Baka Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { baka: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
