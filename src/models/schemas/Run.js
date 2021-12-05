const { Schema, model } = require('mongoose')

const RunSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Run', RunSchema)
