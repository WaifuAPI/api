const createError = require('http-errors')
const requestIp = require('request-ip')
const moment = require('moment')
const Cuddle = require('../../models/schemas/Cuddle')

// Get random Anime Cuddle
module.exports = async function getRandomCuddle(req, res, next) {
  try {
    const [result] = await Cuddle.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Cuddle Gif'))
    }

    res.status(200).json(result)
    console.log(
      `${req.method} | ${moment(Date.now()).format()} ${requestIp.getClientIp(
        req
      )} to ${req.path} - ${JSON.stringify(req.query)}`
    )
  } catch (error) {
    return next(error)
  }
}
