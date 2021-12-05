const { Schema, model } = require('mongoose')

const PeckSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Peck', PeckSchema)
