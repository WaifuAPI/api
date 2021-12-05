const { Schema, model } = require('mongoose')

const ShrugSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Shrug', ShrugSchema)
