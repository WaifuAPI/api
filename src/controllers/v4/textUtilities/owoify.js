import createError from 'http-errors';
import owoify from 'owoify-js';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Gets the Owofied version of the provided text and updates system statistics.
 *
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 *
 * @throws {Error} If there is an error during Owofication or database update.
 *
 * @returns {Object} JSON object containing the Owofied text.
 * @property {String} text - The Owofied version of the provided text.
 *
 * @example
 * // Example usage in Express route handler
 * getOwoifyText(req, res, next);
 */
const getOwoifyText = async (req, res, next) => {
  try {
    /**
     * Extracts the text to be Owofied from the request query.
     * @type {String}
     */
    const { text } = req.query;

    // Check for valid text input
    if (!text) {
      return next(createError(404, 'Invalid text input.'));
    }

    /**
     * Owofies the text and sends the response.
     * @type {Object}
     * @property {String} text - The Owofied version of the provided text.
     */
    res.status(200).json({
      text: owoify(text),
    });

    /**
     * Update system statistics for Owofied texts
     * @type {Object}
     */
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { owoify: 1 } });
  } catch (error) {
    /**
     * Update system statistics for failed requests
     * @type {Object}
     */
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    return next(error);
  }
};

export default getOwoifyText;
