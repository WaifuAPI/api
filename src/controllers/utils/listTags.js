const Tags = require('../../models/schemas/Tags')
const parseOrder = require('../../utils/parseOrder')
const Stats = require('../../models/schemas/Stat')

module.exports = async function listTags(req, res, next) {
  try {
    let { sortBy, sortOrder } = req.query

    // Supported parameter values
    const Values = { sortBy: ['name', 'usedCount'] }
    // The default sort order depends on the `sortBy` field
    const defaultSortOrder = { name: 1, usedCount: -1 }

    sortBy = Values.sortBy.includes(sortBy) ? sortBy : 'name'
    sortOrder = parseOrder(sortOrder) || defaultSortOrder[sortBy] || 1

    const results = await Tags.aggregate([
      {
        $lookup: {
          from: 'facts',
          localField: 'name',
          foreignField: 'tags',
          as: 'usedCount',
        },
      },
      { $addFields: { usedCount: { $size: '$usedCount' } } },
      { $sort: { [sortBy]: sortOrder } },
      { $project: { __v: 0 } },
    ])
    res.json(results)

    await Stats.findOneAndUpdate (
      { _id: "systemstats" },
      { $inc: { tags: 1 } },
    )
  } catch (error) {
    await Stats.findOneAndUpdate (
      { _id: "systemstats" },
      { $inc: { failed_requests: 1 } },
    )
    return next(error)
  }
}
