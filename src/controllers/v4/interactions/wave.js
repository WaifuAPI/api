import createError from 'http-errors';
import Wave from '../../../models/schemas/Wave.js';
import Stats from '../../../models/schemas/Stat.js';

// Get random Anime Wave
const getRandomWave = async (req, res, next) => {
  try {
    const [result] = await Wave.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ]);

    if (!result) {
      return next(createError(404, 'Could not find any Wave Gif'));
    }

    res.status(200).json(result);

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { wave: 1 } });
  } catch (error) {
    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { failed_requests: 1 } });
    return next(error);
  }
};

export default getRandomWave;
