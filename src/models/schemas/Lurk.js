import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const LurkSchema = new Schema({
  _id: { type: Number },
  url: { type: String, required: true },
});

export default model('Lurk', LurkSchema);

