const { Schema, model } = require('mongoose')

const SipSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Sip', SipSchema)
