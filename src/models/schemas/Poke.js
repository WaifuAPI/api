const { Schema, model } = require('mongoose')

const PokeSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Poke', PokeSchema)
