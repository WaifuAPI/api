const { Schema, model } = require('mongoose')

const ByeSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Bye', ByeSchema)
