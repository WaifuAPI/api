import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const HiSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
});

export default model('Hi', HiSchema);

