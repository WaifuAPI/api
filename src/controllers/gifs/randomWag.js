
import createError from 'http-errors';
import Wag from '../../models/schemas/Wag.js';
import Stats from '../../models/schemas/Stat.js';

// Get random Anime Wag
const getRandomWag = async (req, res, next) => {
  try {
    const [result] = await Wag.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ]);

    if (!result) {
      return next(createError(404, 'Could not find any Wag Gif'));
    }

    res.status(200).json(result);

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { wag: 1 } });
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    );
    return next(error);
  }
};

export default getRandomWag;
