const { Schema, model } = require('mongoose')

const ShootSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Shoot', ShootSchema)
