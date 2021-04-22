const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String },
  banned: { type: Boolean, default: false },
  req_quoto: { type: Number, default: 900 },
  req_count: { type: Number, default: 0 },
})

module.exports = model('User', UserSchema)
