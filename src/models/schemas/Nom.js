const { Schema, model } = require('mongoose')

const NomSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Nom', NomSchema)
