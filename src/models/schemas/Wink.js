const { Schema, model } = require('mongoose')

const WinkSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Wink', WinkSchema)
