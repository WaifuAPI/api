const { Schema, model } = require('mongoose')

const TickleSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Tickle', TickleSchema)
