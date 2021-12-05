const { Schema, model } = require('mongoose')

const BlushSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Blush', BlushSchema)
