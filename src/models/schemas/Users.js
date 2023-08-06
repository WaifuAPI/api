const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  _id: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String },
  banned: { type: Boolean, default: false },
  banned_reason: { type: String },
  unbanned_reason: { type: String },
  req_quoto: { type: Number, default: 900 },
  req_count: { type: Number, default: 0 },
  token_reset: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = model('Users', UserSchema)
