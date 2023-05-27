const createError = require('http-errors')
const Shoot = require('../../models/schemas/Shoot')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Shoot
module.exports = async function getRandomShoot(req, res, next) {
  try {
    const [result] = await Shoot.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Shoot Gif'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { shoot: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
