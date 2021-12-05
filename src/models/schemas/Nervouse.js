const { Schema, model } = require('mongoose')

const NervouseSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Nervouse', NervouseSchema)
