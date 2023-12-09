import createError from 'http-errors';
import Quotes from '../../models/schemas/Quotes.js';
import Stats from '../../models/schemas/Stat.js';

/**
 * Gets a random anime quote with optional character filter and updates system statistics.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
const getRandomQuote = async (req, res, next) => {
  try {
    const { character } = req.query;

    // Create a filter object based on the optional character parameter
    const filter = character ? { author: character } : {};

    // Aggregate to match the filter, select a random quote, and project excluding version field
    const [result] = await Quotes.aggregate([
      { $match: filter }, // Apply filters (if any)
      { $sample: { size: 1 } }, // Select a random document from the results
      { $project: { __v: 0 } },
    ]);

    // If no quote is found, return a 404 error
    if (!result) {
      return next(createError(404, 'Could not find any matching Quote'));
    }

    // Respond with the random quote
    res.status(200).json(result);

    // Update system statistics for quotes
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { quotes: 1 } }
    );
  } catch (error) {
    // Update system statistics for failed requests
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    );
    return next(error);
  }
};

export default getRandomQuote;
