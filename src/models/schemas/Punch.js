const { Schema, model } = require('mongoose')

const PunchSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
})

module.exports = model('Punch', PunchSchema)
