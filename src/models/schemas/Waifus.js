import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const WaifuSchema = new Schema({
  _id: { type: Number },
  names: {
    en: { type: String },
    jp: { type: String },
    alt: { type: String },
  },
  from: {
    name: { type: String },
    type: { type: String },
  },
  images: [],
  statistics: {
    fav: { type: Number },
    love: { type: Number },
    hate: { type: Number },
    upvote: { type: Number },
    downvote: { type: Number },
  },
});

const Waifu = model('Waifu', WaifuSchema);

export default Waifu;

