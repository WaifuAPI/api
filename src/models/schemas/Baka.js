const { Schema, model } = require('mongoose')

const BakaSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Baka', BakaSchema)
