const { Schema, model } = require('mongoose')

const CrySchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Cry', CrySchema)
