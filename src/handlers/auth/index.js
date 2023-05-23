const createError = require('http-errors')
const Users = require('../../models/schemas/Users')
const Stats = require('../../models/schemas/Stat')

module.exports = async function authHandler(req, res, next) {
  try {
    // Request Header AUTH var
    const { Authorization } = req.headers
    // Verifies if the {auth} exists in the database
    const userData = await Users.findOneAndUpdate(
      { token: Authorization },
      { $inc: { req_quoto: -1, req_count: 1 } }
    )

    // @returns if the user has not provided token in header
    if (!userData) {
      await Stats.findByIdAndUpdate (
        { _id: "systemstats" },
        { $inc: { failed_requests: 1, endpoints_requests: 1, daily_requests: 1 } }
      )
      return next(createError(401, 'Invalid API key. Go to https:\/\/docs.waifu.it for more info.'))
    }
    // @returns if the user is banned
    if (userData.banned) {
      await Stats.findByIdAndUpdate (
        { _id: "systemstats" },
        { $inc: { banned_requests: 1, endpoints_requests: 1, daily_requests: 1 } }
      )
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

    await Stats.findByIdAndUpdate (
      { _id: "systemstats" },
      { $inc: { endpoints_requests: 1, success_requests: 1, daily_requests: 1 } }
    )

    return next()
  } catch (error) {
    return next(error)
  }
}
