const { Schema, model } = require('mongoose')

const QuoteSchema = new Schema({
  _id: { type: Number, required: true },
  quote: { type: String, required: true },
  anime: { type: String },
  author: { type: String, required: true },
})

module.exports = model('Quote', QuoteSchema)
