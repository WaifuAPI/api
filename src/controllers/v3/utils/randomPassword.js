import pass from 'generate-password';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Generates a random password with specified characteristics.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
const getRandomPassword = async (req, res, next) => {
  try {
    const { charLength } = req.query;

    // Generate a random password with specified characteristics
    const password = pass.generate({
      length: charLength || 50,
      uppercase: true,
      numbers: true,
      symbols: true,
      lowercase: true,
      strict: true,
    });

    res.status(200).json({
      pass: password,
    });

    // Update system statistics for generated passwords
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { password: 1 } }
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

export default getRandomPassword;
