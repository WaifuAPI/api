import createError from 'http-errors';
import uwuify from 'owoify-js';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Route handler to get UwUified text.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
const getUwuifyText = async (req, res, next) => {
  try {
    // Extract text from query parameters
    const { text } = req.query;

    // Validate text input
    if (!text) {
      throw createError(400, 'Invalid text input.');
    }

    // UwUify the text and send the response
    res.status(200).json({
      text: uwuify(text),
    });

    // Increment the UwUify counter in the stats
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { uwuify: 1 } });
  } catch (error) {
    // Increment failed requests counter in the stats and pass the error to the next middleware
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    next(error);
  }
};

export default getUwuifyText;
