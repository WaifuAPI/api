const createError = require('http-errors')
const requestIp = require('request-ip')
const moment = require('moment')
const Kissu = require('../../models/schemas/Kissu')

// Get random Anime Kissu
module.exports = async function getRandomKissu(req, res, next) {
  try {
    const [result] = await Kissu.aggregate([
      // Select a random document from the results
      { $sample: { size: 1 } },
      { $project: { __v: 0, _id: 0 } },
    ])

    if (!result) {
      return next(createError(404, 'Could not find any Kissu Gif'))
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
