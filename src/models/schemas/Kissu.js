const { Schema, model } = require('mongoose')

const KissuSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Kissu', KissuSchema)
