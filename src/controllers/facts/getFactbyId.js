const createError = require('http-errors')
const Facts = require('../../models/schemas/Facts.js')

// Get a Anime fact by its ID
module.exports = async function getQuoteById(req, res, next) {
  try {
    const { id } = req.params
    const result = await Facts.findById(id).select('-__v -_id')

    if (!result) {
      return next(createError(404, 'The requested resource could not be found'))
    }

    res.status(200).json(result)
  } catch (error) {
    return next(error)
  }
}
