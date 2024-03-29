
import createError from 'http-errors';
import Chase from '../../../models/schemas/Chase.js';
import Stats from '../../../models/schemas/Stat.js';

// Get random Anime Chase
const getRandomChase = async (req, res, next) => {
  try {
    const [result] = await Chase.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ]);

    if (!result) {
      return next(createError(404, 'Could not find any Chase Gif'));
    }

    res.status(200).json(result);

    await Stats.findOneAndUpdate({ _id: 'systemstats' }, { $inc: { chase: 1 } });
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    );
    return next(error);
  }
};

export default getRandomChase;
