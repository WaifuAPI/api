const { Schema, model } = require('mongoose')

const SlapSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Slap', SlapSchema)
