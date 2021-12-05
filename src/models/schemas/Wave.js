const { Schema, model } = require('mongoose')

const WaveSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Wave', WaveSchema)
