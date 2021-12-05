const { Schema, model } = require('mongoose')

const BoredSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Bored', BoredSchema)
