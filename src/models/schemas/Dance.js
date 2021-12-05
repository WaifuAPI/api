const { Schema, model } = require('mongoose')

const DanceSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Dance', DanceSchema)
