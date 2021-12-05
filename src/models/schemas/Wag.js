const { Schema, model } = require('mongoose')

const WagSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Wag', WagSchema)
