const { Schema, model } = require('mongoose')

const SuicideSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Suicide', SuicideSchema)
