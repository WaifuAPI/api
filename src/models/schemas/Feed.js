const { Schema, model } = require('mongoose')

const FeedSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Feed', FeedSchema)
