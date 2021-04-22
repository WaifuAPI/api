const { Schema, model } = require('mongoose')

const TagSchema = new Schema({
  _id: { type: Number },
  name: { type: String, required: true },
})

TagSchema.index({ name: 1 }, { name: 'nameIndex' })

module.exports = model('Tag', TagSchema)
