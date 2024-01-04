import createError from 'http-errors';
import uvuify from 'owoify-js';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Route handler to get UvUified text.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
const getUvuifyText = async (req, res, next) => {
  try {
    // Extract text from query parameters
    const { text } = req.query;

    // Validate text input
    if (!text) {
      return next(createError(400, 'Invalid text input.'));
    }

    // UvUify the text and send the response
    res.status(200).json({
      text: uvuify(text),
    });

    // Increment the UvUify counter in the stats
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { uvuify: 1 } });
  } catch (error) {
    // Increment failed requests counter in the stats and pass the error to the next middleware
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    return next(error);
  }
};

export default getUvuifyText;
