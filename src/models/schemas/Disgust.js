const { Schema, model } = require('mongoose')

const DisgustSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Disgust', DisgustSchema)
