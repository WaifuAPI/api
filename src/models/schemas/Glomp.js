const { Schema, model } = require('mongoose')

const GlompSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Glomp', GlompSchema)
