const { Schema, model } = require('mongoose')

const HappySchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Happy', HappySchema)
