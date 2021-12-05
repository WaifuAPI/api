const { Schema, model } = require('mongoose')

const CuddleSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Cuddle', CuddleSchema)
