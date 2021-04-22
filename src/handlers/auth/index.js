const createError = require('http-errors')
const Users = require('../../models/schemas/Users')

module.exports = async function authHandler(req, res, next) {
  try {
    // Request Header AUTH var
    const { auth } = req.headers
    // Verifies if the {auth} exists in the database
    const userData = await Users.findOneAndUpdate(
      { token: auth },
      { $inc: { req_quoto: -1, req_count: 1 } }
    )
    console.log(userData)
    // @returns if the user has not provided token in header
    if (!userData) {
      return next(createError(401, 'Unauthorized'))
    }
    // @returns if the user is banned
    if (userData.banned) {
      return next(createError(403, "You've been banned from using the API."))
    }
    // If request limit exhausted throw this [ Currently Disabled ]
    // if (userData.req_quoto <= 0) {
    //   return next(
    //     createError(
    //       403,
    //       "You've exhausted your request limits. Buy Premium to increase it more."
    //     )
    //   )
    // }

    return next()
  } catch (error) {
    return next(error)
  }
}
