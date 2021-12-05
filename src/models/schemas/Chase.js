const { Schema, model } = require('mongoose')

const ChaseSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Chase', ChaseSchema)
