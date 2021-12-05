const { Schema, model } = require('mongoose')

const LurkSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Lurk', LurkSchema)
