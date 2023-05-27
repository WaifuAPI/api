const createError = require('http-errors')
const Sip = require('../../models/schemas/Sip')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Sip
module.exports = async function getRandomSip(req, res, next) {
  try {
    const [result] = await Sip.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Sip Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { sip: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
