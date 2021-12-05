const { Schema, model } = require('mongoose')

const FacepalmSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Facepalm', FacepalmSchema)
