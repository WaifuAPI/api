import createError from 'http-errors';
import uvuify from 'owoify-js';
import Stats from '../../../models/schemas/Stat.js';

const getUvufiyText = async (req, res, next) => {
  try {
    const { text } = req.query;

    if (!text) {
      return next(createError(404, 'Invalid text input.'));
    }

    res.status(200).json({
      text: uvuify(text),
    });

    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { uvuify: 1 } }
    );
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    );
    return next(error);
  }
};

export default getUvufiyText;
