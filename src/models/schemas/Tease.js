const { Schema, model } = require('mongoose')

const TeaseSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Tease', TeaseSchema)
