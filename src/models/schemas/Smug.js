const { Schema, model } = require('mongoose')

const SmugSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Smug', SmugSchema)
