const { Schema, model } = require('mongoose')

const StabSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Stab', StabSchema)
