const { Schema, model } = require('mongoose')

const TriggeredSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Triggered', TriggeredSchema)
