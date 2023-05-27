const createError = require('http-errors')
const Kissu = require('../../models/schemas/Kissu')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Kissu
module.exports = async function getRandomKissu(req, res, next) {
  try {
    const [result] = await Kissu.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Kissu Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { kissu: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
