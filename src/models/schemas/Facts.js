const { Schema, model } = require('mongoose')

const FactSchema = new Schema({
  _id: { type: Number },
  fact: { type: String, required: true },
  tags: { type: [String], required: true },
  length: { type: Number },
})

module.exports = model('Fact', FactSchema)
