const createError = require('http-errors')
const Facts = require('../../models/schemas/Facts')
const tagsFilter = require('../../utils/tagsFilter')
const lengthFilter = require('../../utils/lengthFilter')
const Stats = require('../../models/schemas/Stat')

// Get random Anime Fact
module.exports = async function getRandomFact(req, res, next) {
  try {
    const { minLength, maxLength, tags } = req.query

    const filter = {}

    if (minLength || maxLength) {
      filter.length = lengthFilter(minLength, maxLength)
    }

    if (tags) {
      filter.tags = tagsFilter(tags)
    }

    const [result] = await Facts.aggregate([
      // Apply filters (if any)
      { $match: filter },
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any matching fact'))
    }

    res.status(200).json(result)

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { facts: 1 } })
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
