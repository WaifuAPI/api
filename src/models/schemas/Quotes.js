const { Schema, model } = require('mongoose')

const QuoteSchema = new Schema({
  _id: { type: Number, required: true },
  quote: { type: String, required: true },
  anime: { type: String, },
  name: { type: String, },
})

module.exports = model('Quote', QuoteSchema)