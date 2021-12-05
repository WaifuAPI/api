const { Schema, model } = require('mongoose')

const ThinkSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Think', ThinkSchema)
