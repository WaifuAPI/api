const { Schema, model } = require('mongoose')

const CheerSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Cheer', CheerSchema)
