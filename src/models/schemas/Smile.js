const { Schema, model } = require('mongoose')

const BiteSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Smile', BiteSchema)
