const { Schema, model } = require('mongoose')

const SadSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Sad', SadSchema)
