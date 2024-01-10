import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const TagSchema = new Schema({
  _id: { type: Number },
  name: { type: String, required: true },
});

TagSchema.index({ name: 1 }, { name: 'nameIndex' });

const Tag = model('Tag', TagSchema);

export default Tag;
