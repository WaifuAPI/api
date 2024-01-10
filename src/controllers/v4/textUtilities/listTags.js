import Tags from '../../../models/schemas/Tags.js';
import parseOrder from '../../../modules/parseOrder.js';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Lists tags with optional sorting and updates system statistics.
 *
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 *
 * @throws {Error} If there is an error during tag listing or database update.
 *
 * @returns {Object} JSON object containing the sorted tags.
 * @property {Array<Object>} results - Array of tags with additional usage count information.
 * @property {String} results[].name - The name of the tag.
 * @property {Number} results[].usedCount - The count of associated facts using the tag.
 *
 * @example
 * // Example usage in Express route handler
 * listTags(req, res, next);
 */
const listTags = async (req, res, next) => {
  try {
    /**
     * Extracts sortBy and sortOrder parameters from the request query.
     * @type {Object}
     */
    let { sortBy, sortOrder } = req.query;

    // Supported parameter values
    const Values = { sortBy: ['name', 'usedCount'] };
    // The default sort order depends on the `sortBy` field
    const defaultSortOrder = { name: 1, usedCount: -1 };

    // Validate and set sortBy and sortOrder
    sortBy = Values.sortBy.includes(sortBy) ? sortBy : 'name';
    sortOrder = parseOrder(sortOrder) || defaultSortOrder[sortBy] || 1;

    /**
     * Aggregate tags, including the count of associated facts, and sort the results
     * Holds the results of the tag listing.
     * @type {Array<Object>}
     */
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

    /**
     * Responds with a JSON object containing the sorted tags.
     * @type {Object}
     * @property {Array<Object>} results - Array of tags with additional usage count information.
     * @property {String} results[].name - The name of the tag.
     * @property {Number} results[].usedCount - The count of associated facts using the tag.
     */
    res.json(results);

    // Update system statistics for tags
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { tags: 1 } });
  } catch (error) {
    /**
     * Update system statistics for failed requests
     * @type {Object}
     */
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    return next(error);
  }
};

export default listTags;
