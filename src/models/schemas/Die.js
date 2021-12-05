const { Schema, model } = require('mongoose')

const DieSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Die', DieSchema)
