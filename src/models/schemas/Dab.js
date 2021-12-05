const { Schema, model } = require('mongoose')

const DabSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Dab', DabSchema)
