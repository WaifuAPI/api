const Waifus = require('../../models/schemas/Waifus')

// Get a random waifu
module.exports = async function getRandomWaifu(req, res, next) {
  try {
    const [result] = await Waifus.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0 } },
    ])

    res.status(200).json(result)
  } catch (error) {
    return next(error)
  }
}
