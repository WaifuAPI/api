// Assuming you have imported the required modules and set up the MongoDB connection.
const crypto = require('crypto')
const Users = require('../../models/schemas/Users')
const generateToken = require('../../utils/generateToken')

module.exports = async function userEndpoint(req, res, next) {
  try {
    const { body, headers, method } = req
    const { key } = headers

    if (!key || key !== process.env.ACCESS_KEY) {
      return res.status(401).json({
        message: 'Unauthorized',
      })
    }
    if (method === 'POST') {
      const { token, id } = body

      if (!token || !id) {
        return res.status(400).json({
          message: 'Token and User ID are required in the request body',
        })
      }

      // Assuming you have a MongoDB collection called "users" and you want to update the token for a specific user.
      // Replace "Users" with your actual model name for users.
      await Users.updateOne(
        { _id: id },
        { $set: { token: token } },
        { upsert: true } // This option creates the document if it doesn't exist.
      )

      return res.status(200).json({
        message: 'Token updated successfully',
      })
    } else if (method === 'GET') {
      const { id, email } = headers

      if (!id) {
        return res.status(400).json({
          message: 'User ID missing in the request body',
        })
      }

      // Assuming you have a MongoDB collection called "users" and you want to fetch user details based on the provided user ID.
      // Replace "Users" with your actual model name for users.
      const user = await Users.findOne({ _id: id })

      if (!user) {
        // If user not found, create a new user with the provided ID and token.
        const newUser = {
          _id: id,
          email: email,
          password: crypto.randomBytes(22).toString('base64'),
          token: generateToken(id, process.env.HMAC_KEY), // Assuming you have a "token" field in your schema.
          // Add other fields in the "newUser" object based on your schema.
        }

        await Users.create(newUser)

        return res.status(201).json(newUser.token)
      }

      return res.status(200).json(user.token)
    } else {
      return res.status(405).json({
        message: 'Method Not Allowed',
      })
    }
  } catch (error) {
    return next(error)
  }
}
