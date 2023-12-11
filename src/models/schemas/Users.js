import mongoose from 'mongoose';

/**
 * User Schema for storing user information.
 * @typedef {Object} UserSchema
 * @property {string} _id - Unique identifier for the user.
 * @property {string} email - User's email address. (required)
 * @property {string} password - User's password. (required)
 * @property {string} token - Authentication token for the user.
 * @property {boolean} banned - Flag indicating whether the user is banned. (default: false)
 * @property {Array<{ timestamp: Date, reason: string, isBanned: boolean }>} status_history - Array to store history of status changes with timestamp, reason, and ban/unban flag.
 * @property {number} req_quota - User's request quota. (default: 900)
 * @property {number} req_count - Number of requests made by the user. (default: 0)
 * @property {boolean} token_reset - Flag indicating whether the user's token needs to be reset. (default: false)
 * @property {Date} createdAt - Date and time when the user account was created. (default: current date and time)
 * @property {number} rateLimit - Request rate limit for the user. (default: 20)
 */

const userSchema = new mongoose.Schema({
  _id: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String },
  banned: { type: Boolean, default: false },
  status_history: [
    {
      timestamp: { type: Date, default: Date.now },
      reason: { type: String },
      isBanned: { type: Boolean },
    },
  ],
  req_quota: { type: Number, default: 900 },
  req_count: { type: Number, default: 0 },
  token_reset: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  rateLimit: { type: Number, default: 20 },
});

/**
 * User model for interacting with the 'Users' collection in MongoDB.
 * @type {mongoose.Model<UserSchema>}
 */
const User = mongoose.model('User', userSchema);

export default User;
