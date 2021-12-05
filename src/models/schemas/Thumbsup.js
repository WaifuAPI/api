const { Schema, model } = require('mongoose')

const ThumbsupSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Thumbsup', ThumbsupSchema)
