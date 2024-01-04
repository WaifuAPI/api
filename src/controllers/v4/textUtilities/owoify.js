import createError from 'http-errors';
import owoify from 'owoify-js';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Gets the Owofied version of the provided text and updates system statistics.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
const getOwoifyText = async (req, res, next) => {
  try {
    const { text } = req.query;

    // Check for valid text input
    if (!text) {
      return next(createError(404, 'Invalid text input.'));
    }

    // Owofy the text and send the response
    res.status(200).json({
      text: owoify(text),
    });

    // Update system statistics for Owofied texts
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { owoify: 1 } });
  } catch (error) {
    // Update system statistics for failed requests
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    return next(error);
  }
};

export default getOwoifyText;
