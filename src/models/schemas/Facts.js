import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const FactSchema = new Schema({
  _id: { type: Number },
  fact: { type: String, required: true },
  tags: { type: [String], required: true },
  length: { type: Number },
});

const Fact = model('Fact', FactSchema);

export default Fact;
