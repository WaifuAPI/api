const { Schema, model } = require('mongoose')

const LickSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Lick', LickSchema)
