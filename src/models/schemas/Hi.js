const { Schema, model } = require('mongoose')

const HiSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Hi', HiSchema)
