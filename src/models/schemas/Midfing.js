const { Schema, model } = require('mongoose')

const MidfingSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Midfing', MidfingSchema)
