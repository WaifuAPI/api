import createError from 'http-errors';
import Facts from '../../../models/schemas/Fact.js';
import tagsFilter from '../../../modules/tagsFilter.js';
import lengthFilter from '../../../modules/lengthFilter.js';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Gets a random anime fact with optional length and tags filters and updates system statistics.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
const getRandomFact = async (req, res, next) => {
  try {
    const { minLength, maxLength, tags } = req.query;

    // Create a filter object based on the optional length and tags parameters
    const filter = {};

    // Apply length filter (if minLength or maxLength is provided)
    if (minLength || maxLength) {
      filter.length = lengthFilter(minLength, maxLength);
    }

    // Apply tags filter (if tags are provided)
    if (tags) {
      filter.tags = tagsFilter(tags);
    }

    // Aggregate to match the filter, select a random fact, and project excluding version field
    const [result] = await Facts.aggregate([
      { $match: filter }, // Apply filters (if any)
      { $sample: { size: 1 } }, // Select a random document from the results
      { $project: { __v: 0 } },
    ]);

    // If no fact is found, return a 404 error
    if (!result) {
      return next(createError(404, 'Could not find any matching fact'));
    }

    // Respond with the random fact
    res.status(200).json(result);

    // Update system statistics for facts
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { facts: 1 } });
  } catch (error) {
    // Update system statistics for failed requests
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    return next(error);
  }
};

export default getRandomFact;
