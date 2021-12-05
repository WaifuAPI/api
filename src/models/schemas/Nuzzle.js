const { Schema, model } = require('mongoose')

const NuzzleSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Nuzzle', NuzzleSchema)
