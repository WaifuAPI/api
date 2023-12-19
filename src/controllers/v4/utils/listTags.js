import Tags from '../../../models/schemas/Tags.js';
import parseOrder from '../../../utils/parseOrder.js';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Lists tags with optional sorting and updates system statistics.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
const listTags = async (req, res, next) => {
  try {
    let { sortBy, sortOrder } = req.query;

    // Supported parameter values
    const Values = { sortBy: ['name', 'usedCount'] };
    // The default sort order depends on the `sortBy` field
    const defaultSortOrder = { name: 1, usedCount: -1 };

    // Validate and set sortBy and sortOrder
    sortBy = Values.sortBy.includes(sortBy) ? sortBy : 'name';
    sortOrder = parseOrder(sortOrder) || defaultSortOrder[sortBy] || 1;

    // Aggregate tags, including the count of associated facts, and sort the results
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
    ]);

    // Respond with the sorted tags
    res.json(results);

    // Update system statistics for tags
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { tags: 1 } }
    );
  } catch (error) {
    // Update system statistics for failed requests
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    );
    return next(error);
  }
};

export default listTags;
