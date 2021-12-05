const { Schema, model } = require('mongoose')

const StareSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Stare', StareSchema)
