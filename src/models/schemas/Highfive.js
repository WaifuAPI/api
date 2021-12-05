const { Schema, model } = require('mongoose')

const HighfiveSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Highfive', HighfiveSchema)
