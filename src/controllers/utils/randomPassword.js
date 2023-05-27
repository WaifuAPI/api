const pass = require('generate-password')
const Stats = require('../../models/schemas/Stat')

// Get random Password
module.exports = async function getRandomPassword(req, res, next) {
  try {
    const { charLength } = req.query

    const password = pass.generate({
      length: charLength || 50,
      uppercase: true,
      numbers: true,
      symbols: true,
      lowercase: true,
      strict: true,
    })

    res.status(200).json({
      pass: password,
    })

    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { password: 1 } }
    )
  } catch (error) {
    await Stats.findOneAndUpdate(
      { _id: 'systemstats' },
      { $inc: { failed_requests: 1 } }
    )
    return next(error)
  }
}
