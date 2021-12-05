const { Schema, model } = require('mongoose')

const KickSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Kick', KickSchema)
