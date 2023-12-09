import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const QuoteSchema = new Schema({
  _id: { type: Number, required: true },
  quote: { type: String, required: true },
  anime: { type: String },
  author: { type: String, required: true },
});

const Quote = model('Quote', QuoteSchema);

export default Quote;
