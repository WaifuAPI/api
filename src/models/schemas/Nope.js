const { Schema, model } = require('mongoose')

const NopeSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Nope', NopeSchema)
