const { Schema, model } = require('mongoose')

const HoldSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Hold', HoldSchema)
