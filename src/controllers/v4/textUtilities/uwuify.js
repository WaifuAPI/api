import createError from 'http-errors';
import uwuify from 'owoify-js';
import Stats from '../../../models/schemas/Stat.js';

const getUwuifyText = async (req, res, next) => {
  try {
    const { text } = req.query;

    if (!text) {
      throw createError(404, 'Invalid text input.');
    }

    res.status(200).json({
      text: uwuify(text),
    });

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { uwuify: 1 } });
  } catch (error) {
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    next(error);
  }
};

export default getUwuifyText;
