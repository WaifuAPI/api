import createError from 'http-errors';
import Waifus from '../../../models/schemas/Waifu.js';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Gets a random waifu and updates system statistics.
 *
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 *
 * @throws {Error} If there is an error during waifu retrieval or database update.
 *
 * @returns {Object} JSON object containing the random waifu.
 * @example
 * // Example usage in Express route handler
 * getWaifu(req, res, next);
 */
const getWaifu = async (req, res, next) => {
  try {
    /**
     * Extracts character name and anime parameters from the request query.
     * @type {Object}
     */
    const { name, anime } = req.query;

    /**
     * Holds the filter object based on the optional character name and anime name parameters.
     * @type {Object}
     */
    const filter = {};

    /**
     * Add conditions to filter object based on request parameters
     * @type {Object}
     */

    if (name) {
      filter['names.en'] = { $regex: new RegExp(name, 'i') }; // Case-insensitive regex match for English name
    }

    if (anime) {
      filter['from.name'] = { $regex: new RegExp(anime, 'i') }; // Case-insensitive regex match for anime name
    }

    /**
     * Holds the result of the random waifu retrieval.
     * @type {Object}
     */
    const [result] = await Waifus.aggregate([
      { $match: filter }, // Apply filter conditions (if any)
      { $sample: { size: 1 } },
      { $project: { __v: 0 } },
    ]);

    // If no fact is found, return a 404 error
    if (!result) {
      return next(createError(404, 'Could not find any matching waifu'));
    }
    /**
     * Responds with a JSON object containing the random waifu.
     * @type {Object}
     * @property {Number} _id - The unique identifier of the waifu.
     * @property {Object} names - Object containing different names for the waifu (en, jp, alt).
     * @property {String} names.en - English name of the waifu.
     * @property {String} names.jp - Japanese name of the waifu.
     * @property {String} names.alt - Alternate name of the waifu.
     * @property {Object} from - Object containing information about the origin of the waifu.
     * @property {String} from.name - Name of the source or series.
     * @property {String} from.type - Type of the source or series.
     * @property {Array<String>} images - Array of image URLs associated with the waifu.
     * @property {Object} statistics - Object containing various statistics related to the waifu.
     * @property {Number} statistics.fav - Number of favorites for the waifu.
     * @property {Number} statistics.love - Number of loves for the waifu.
     * @property {Number} statistics.hate - Number of hates for the waifu.
     * @property {Number} statistics.upvote - Number of upvotes for the waifu.
     * @property {Number} statistics.downvote - Number of downvotes for the waifu.
     */
    res.status(200).json(result);

    // Update system statistics for waifus
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { waifus: 1 } });
  } catch (error) {
    /**
     * Update system statistics for failed requests
     * @type {Object}
     */
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    next(error);
  }
};

export default getWaifu;
