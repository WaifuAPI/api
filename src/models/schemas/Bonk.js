const { Schema, model } = require('mongoose')

const BonkSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Bonk', BonkSchema)
