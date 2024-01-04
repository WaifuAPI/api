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
 * getRandomWaifu(req, res, next);
 */
const getRandomWaifu = async (req, res, next) => {
  try {
    /**
     * Holds the result of the random waifu retrieval.
     * @type {Object}
     */
    const [result] = await Waifus.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0 } },
    ]);

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

export default getRandomWaifu;
