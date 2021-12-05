const { Schema, model } = require('mongoose')

const PoutSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Pout', PoutSchema)
