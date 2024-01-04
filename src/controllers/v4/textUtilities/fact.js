import createError from 'http-errors';
import Facts from '../../../models/schemas/Fact.js';
import tagsFilter from '../../../modules/tagsFilter.js';
import lengthFilter from '../../../modules/lengthFilter.js';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Gets a random anime fact with optional length and tags filters and updates system statistics.
 *
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 *
 * @throws {Error} If there is an error during fact retrieval or database update.
 *
 * @returns {Object} JSON object containing the random fact.
 * @property {String} _id - The unique identifier of the fact.
 * @property {String} fact - The text of the anime fact.
 * @property {Array<String>} tags - Array of tags associated with the fact.
 * @property {Number} length - The length of the fact.
 *
 * @example
 * // Example usage in Express route handler
 * getRandomFact(req, res, next);
 */
const getRandomFact = async (req, res, next) => {
  try {
    /**
     * Extracts minLength, maxLength, and tags parameters from the request query.
     * @type {Object}
     */
    const { minLength, maxLength, tags } = req.query;

    /**
     * Holds the filter object based on the optional length and tags parameters.
     * @type {Object}
     */
    const filter = {};

    // Apply length filter (if minLength or maxLength is provided)
    if (minLength || maxLength) {
      filter.length = lengthFilter(minLength, maxLength);
    }

    // Apply tags filter (if tags are provided)
    if (tags) {
      filter.tags = tagsFilter(tags);
    }

    /**
     * Holds the result of the random fact retrieval.
     * @type {Object}
     */
    const [result] = await Facts.aggregate([
      { $match: filter }, // Apply filters (if any)
      { $sample: { size: 1 } }, // Select a random document from the results
      { $project: { __v: 0 } },
    ]);

    // If no fact is found, return a 404 error
    if (!result) {
      return next(createError(404, 'Could not find any matching fact'));
    }

    /**
     * Responds with a JSON object containing the random fact.
     * @type {Object}
     * @property {String} _id - The unique identifier of the fact.
     * @property {String} fact - The text of the anime fact.
     * @property {Array<String>} tags - Array of tags associated with the fact.
     * @property {Number} length - The length of the fact.
     */
    res.status(200).json(result);

    // Update system statistics for facts
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { facts: 1 } });
  } catch (error) {
    /**
     * Update system statistics for failed requests
     * @type {Object}
     */
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    return next(error);
  }
};

export default getRandomFact;
