import mongoose from 'mongoose';

/**
 * Represents the schema for the User model.
 * @class UserSchema
 */
const UserSchema = new mongoose.Schema({
  /**
   * Unique identifier for the user.
   * @type {string}
   */
  _id: { type: String },

  /**
   * User's email address.
   * @type {string}
   * @required
   */
  email: { type: String, required: true },

  /**
   * User's hashed password.
   * @type {string}
   * @required
   */
  password: { type: String, required: true },

  /**
   * User's Discord access token
   * @type {string}
   */
  access_token: { type: String },

  /**
   * Authentication token for the user.
   * @type {string}
   */
  token: { type: String },

  /**
   * Flag indicating whether the user is banned.
   * @type {boolean}
   * @default false
   */
  banned: { type: Boolean, default: false },

  /**
   * Array to store the history of status changes with timestamp, reason, and ban/unban flag.
   * @type {Array<{ timestamp: Date, reason: string, isBanned: boolean }>}
   */
  status_history: [
    {
      /**
       * Timestamp of the status change.
       * @type {Date}
       * @default Date.now
       */
      timestamp: { type: Date, default: Date.now },

      /**
       * The reason for the status change.
       * @type {string}
       */
      reason: { type: String },

      /**
       * Flag indicating whether the user is banned at this status change.
       * @type {boolean}
       */
      isBanned: { type: Boolean },
    },
  ],

  /**
   * User's request quota.
   * @type {number}
   * @default 900
   */
  req_quota: { type: Number, default: 900 },

  /**
   * Number of requests made by the user.
   * @type {number}
   * @default 0
   */
  req_count: { type: Number, default: 0 },

  /**
   * Flag indicating whether the user's token needs to be reset.
   * @type {boolean}
   * @default false
   */
  token_reset: { type: Boolean, default: false },

  /**
   * Date and time when the user account was created.
   * @type {Date}
   * @default Date.now
   */
  createdAt: { type: Date, default: Date.now() },

  /**
   * Request rate limit for the user.
   * @type {number}
   * @default 20
   */
  rateLimit: { type: Number, default: 20 },

  /**
   * Array of roles assigned to the user.
   * @type {Array<string>}
   * @default ['user']
   */
  roles: { type: [String], default: ['user'] },
});

/**
 * User model for interacting with the 'Users' collection in MongoDB.
 * @class User
 * @type {mongoose.Model<UserSchema>}
 */
const User = mongoose.model('User', UserSchema);

export default User;
