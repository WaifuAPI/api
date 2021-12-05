const { Schema, model } = require('mongoose')

const LaughSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Laugh', LaughSchema)
