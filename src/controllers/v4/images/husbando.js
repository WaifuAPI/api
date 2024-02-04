import _ from 'lodash';
import createError from 'http-errors';
import Husbandos from '../../../models/schemas/Husbando.js';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Retrieves a random husbando and updates system statistics.
 *
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 *
 * @throws {Error} If there is an error during husbando retrieval or database update.
 *
 * @returns {Object} JSON object containing the random husbando.
 * @example
 * // Example usage in Express route handler
 * getHusbando(req, res, next);
 */
const getHusbando = async (req, res, next) => {
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
     * Adds conditions to the filter object based on request parameters.
     * @type {Object}
     */
    if (name) {
      const sanitizedName = _.escapeRegExp(name.trim());
      filter['name.full'] = { $regex: new RegExp(sanitizedName, 'i') }; // Case-insensitive regex match for the English name
    }

    if (anime) {
      const sanitizedAnime = _.escapeRegExp(anime.trim());
      filter['media.nodes[0].title.userPreferred'] = { $regex: new RegExp(sanitizedAnime, 'i') }; // Case-insensitive regex match for anime name
    }

    /**
     * Holds the result of the random husbando retrieval.
     * @type {Object}
     */
    const [result] = await Husbandos.aggregate([
      { $match: filter }, // Apply filter conditions (if any)
      { $sample: { size: 1 } },
      { $project: { __v: 0 } },
    ]);

    // If no husbando is found, return a 404 error
    if (!result) {
      return next(createError(404, 'Could not find any matching husbando'));
    }

    res.status(200).json(result);

    // Update system statistics for husbandos
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { husbandos: 1 } });
  } catch (error) {
    /**
     * Update system statistics for failed requests.
     * @type {Object}
     */
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    next(error);
  }
};

export default getHusbando;
