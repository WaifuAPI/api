const { Schema, model } = require('mongoose')

const BullySchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Bully', BullySchema)
