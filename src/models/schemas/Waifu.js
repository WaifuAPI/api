import mongoose from 'mongoose';

// Destructuring to extract Schema and model from mongoose
const { Schema, model } = mongoose;

/**
 * Represents the schema for the Waifu model.
 * @class WaifuSchema
 */
const WaifuSchema = new Schema({
  /**
   * The unique identifier for the Waifu.
   * @type {Number}
   */
  _id: { type: Number, required: true },

  /**
   * The name details of the Waifu.
   * @type {Object}
   */
  name: {
    /**
     * The first name of the Waifu.
     * @type {String}
     */
    first: { type: String, required: true },

    /**
     * The middle name of the Waifu.
     * @type {String}
     */
    middle: String,

    /**
     * The last name of the Waifu.
     * @type {String}
     */
    last: { type: String, required: true },

    /**
     * The full name of the Waifu.
     * @type {String}
     */
    full: { type: String, required: true },

    /**
     * The native name of the Waifu.
     * @type {String}
     */
    native: String,

    /**
     * The user-preferred name of the Waifu.
     * @type {String}
     */
    userPreferred: { type: String, required: true },
  },

  /**
   * The image URL associated with the Waifu.
   * @type {Object}
   */
  image: {
    /**
     * The URL for the large image.
     * @type {String}
     */
    large: String,
    medium: String,
  },

  /**
   * The number of favorites for the Waifu.
   * @type {Number}
   */
  favourites: { type: Number, required: true },

  /**
   * The URL of the Waifu's profile.
   * @type {String}
   */
  siteUrl: { type: String, required: true },

  /**
   * The description of the Waifu.
   * @type {String}
   */
  description: { type: String, required: true },

  /**
   * The age range of the Waifu.
   * @type {String}
   */
  age: String,

  /**
   * The gender of the Waifu.
   * @type {String}
   */
  gender: { type: String, required: true },

  /**
   * The blood type of the Waifu.
   * @type {String}
   */
  bloodType: String,

  /**
   * The date of birth of the Waifu.
   * @type {Object}
   */
  dateOfBirth: {
    /**
     * The year of birth.
     * @type {Number}
     */
    year: Number,

    /**
     * The month of birth.
     * @type {Number}
     */
    month: Number,

    /**
     * The day of birth.
     * @type {Number}
     */
    day: Number,
  },

  /**
   * The media information associated with the Waifu.
   * @type {Object}
   */
  media: {
    /**
     * The list of media nodes.
     * @type {Array}
     */
    nodes: [
      {
        /**
         * The unique identifier for the media.
         * @type {Number}
         */
        id: { type: Number, required: true },

        /**
         * The unique identifier for the media on MyAnimeList.
         * @type {Number}
         */
        idMal: { type: Number, required: true },

        /**
         * The cover image URL for the media (medium size).
         * @type {Object}
         */
        coverImage: {
          medium: { type: String, required: true },
        },

        /**
         * The banner image URL for the media.
         * @type {String}
         */
        bannerImage: String,

        /**
         * The title information for the media.
         * @type {Object}
         */
        title: {
          /**
           * The romaji title of the media.
           * @type {String}
           */
          romaji: { type: String, required: true },

          /**
           * The English title of the media.
           * @type {String}
           */
          english: { type: String, required: true },

          /**
           * The native title of the media.
           * @type {String}
           */
          native: { type: String, required: true },

          /**
           * The user-preferred title of the media.
           * @type {String}
           */
          userPreferred: { type: String, required: true },
        },

        /**
         * The list of synonyms for the media title.
         * @type {Array}
         */
        synonyms: [String],

        /**
         * The popularity rank of the media.
         * @type {Number}
         */
        popularity: Number,

        /**
         * The type of the media (e.g., ANIME, MANGA).
         * @type {String}
         */
        type: { type: String, required: true },

        /**
         * The format of the media (e.g., TV, MOVIE).
         * @type {String}
         */
        format: { type: String, required: true },
      },
    ],
  },
});

/**
 * Represents the Waifu model.
 * @class Waifu
 */
const Waifu = model('Waifu', WaifuSchema);

export default Waifu;
