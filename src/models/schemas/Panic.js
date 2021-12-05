const { Schema, model } = require('mongoose')

const PanicSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Panic', PanicSchema)
