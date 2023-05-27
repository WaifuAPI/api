const createError = require('http-errors')
const Bully = require('../../models/schemas/Bully')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Bully
module.exports = async function getRandomBully(req, res, next) {
  try {
    const [result] = await Bully.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Bully Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { bully: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
