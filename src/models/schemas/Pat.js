const { Schema, model } = require('mongoose')

const PatSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Pat', PatSchema)
