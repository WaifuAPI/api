import mongoose from 'mongoose';

// Destructuring to extract Schema and model from mongoose
const { Schema, model } = mongoose;

/**
 * Represents the schema for the Waifu model.
 * @class WaifuSchema
 */
const WaifuSchema = new Schema({
  _id: { type: Number, required: true },
  names: {
    /**
     * The English name of the waifu.
     * @type {String}
     */
    en: { type: String, required: true },

    /**
     * The Japanese name of the waifu.
     * @type {String}
     */
    jp: { type: String },

    /**
     * Alternative name or alias of the waifu.
     * @type {String}
     */
    alt: { type: String },
  },
  from: {
    /**
     * The name of the source or origin of the waifu.
     * @type {String}
     */
    name: { type: String },

    /**
     * The type or category of the source from which the waifu originates.
     * @type {String}
     */
    type: { type: String },
  },
  /**
   * Array of image URLs associated with the waifu.
   * @type {Array}
   */
  images: [String],

  statistics: {
    /**
     * The number of favorites received by the waifu.
     * @type {Number}
     */
    fav: { type: Number },

    /**
     * The number of times the waifu is loved.
     * @type {Number}
     */
    love: { type: Number },

    /**
     * The number of times the waifu is disliked or hated.
     * @type {Number}
     */
    hate: { type: Number },

    /**
     * The number of upvotes received by the waifu.
     * @type {Number}
     */
    upvote: { type: Number },

    /**
     * The number of downvotes received by the waifu.
     * @type {Number}
     */
    downvote: { type: Number },
  },
});

/**
 * Represents the Waifu model.
 * @class Waifu
 */
const Waifu = model('Waifu', WaifuSchema);

export default Waifu;
