const { Schema, model } = require('mongoose')

const KillSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Kill', KillSchema)
