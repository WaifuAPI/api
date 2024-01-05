import crypto from 'crypto';
import Users from '../../../models/schemas/User.js';
import generateToken from '../../../modules/generateToken.js';

/**
 * Fetches user profile data based on the provided user ID.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} - User profile data.
 */
const getUserProfile = async (req, res, next) => {
  const key = req.headers.key;
  console.log('Key: ' + key);
  // Check for valid access key in headers
  if (!key || key !== process.env.ACCESS_KEY) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }
  const user = await Users.findById(req.params.id);
  console.log(user);
  if (!user) {
    return res.status(404).json({ message: 'User not found' }); // User not found
  }

  return res.status(200).json(user);
};

/**
 * Handles user-related operations based on the HTTP method.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
const userEndpoint = async (req, res, next) => {
  try {
    const { body, headers, method } = req;
    const { key } = headers;

    // Check for valid access key in headers
    if (!key || key !== process.env.ACCESS_KEY) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    if (method === 'POST') {
      const { token, id } = body;

      // Check for required fields in the request body
      if (!token || !id) {
        return res.status(400).json({
          message: 'Token and User ID are required in the request body',
        });
      }

      // Update user's token in the database
      await Users.updateOne(
        { _id: { $eq: id } },
        { $set: { token: token } },
        { upsert: true }, // Create the document if it doesn't exist
      );

      return res.status(200).json({
        message: 'Token updated successfully',
      });
    } else if (method === 'GET') {
      const { id, email } = headers;

      // Check for required User ID in the headers
      if (!id) {
        return res.status(400).json({
          message: 'User ID missing in the request body',
        });
      }

      // Fetch user details based on the provided user ID
      const user = await Users.findOne({ _id: { $eq: id } });

      if (!user) {
        // If user not found, create a new user with the provided ID and token
        const newUser = {
          _id: id,
          email: email,
          password: crypto.randomBytes(22).toString('base64'),
          token: generateToken(id, process.env.HMAC_KEY),
          // Add other fields in the "newUser" object based on your schema
        };

        await Users.create(newUser);

        return res.status(201).json(newUser.token);
      }

      return res.status(200).json(user.token);
    } else {
      return res.status(405).json({
        message: 'Method Not Allowed',
      });
    }
  } catch (error) {
    return next(error);
  }
};

export { userEndpoint, getUserProfile };
