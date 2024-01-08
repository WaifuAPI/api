import pass from 'generate-password';
import Stats from '../../../models/schemas/Stat.js';

/**
 * Generates a random password with specified characteristics.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 *
 * @throws {Error} If there is an error during the password generation or database update.
 *
 * @returns {Object} JSON object containing the generated password.
 * @property {String} pass - The generated password.
 *
 * @example
 * // Example usage in Express route handler
 * getPassword(req, res, next);
 */
const getPassword = async (req, res, next) => {
  try {
    /**
     * Extracts the desired character length for the password.
     * @type {number}
     * @default 50
     */
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

    /**
     * Responds with a JSON object containing the generated password.
     * @type {Object}
     * @property {String} pass - The generated password.
     */
    res.status(200).json({
      pass: password,
    });

    // Update system statistics for generated passwords
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { password: 1 } });
  } catch (error) {
    /**
     * Update system statistics for failed requests
     * @type {Object}
     */
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    return next(error);
  }
};

export default getPassword;
