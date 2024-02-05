import mongoose from 'mongoose';

const { Schema, model } = mongoose;

/**
 * Represents the schema for the Husbando model.
 * @class HusbandoSchema
 */
const HusbandoSchema = new Schema({
  /**
   * The unique identifier for the husbando.
   * @type {Number}
   */
  _id: { type: Number, required: true },

  /**
   * The name details of the husbando.
   * @type {Object}
   */
  name: {
    /**
     * The first name of the husbando.
     * @type {String}
     */
    first: { type: String, required: true },

    /**
     * The middle name of the husbando.
     * @type {String}
     */
    middle: String,

    /**
     * The last name of the husbando.
     * @type {String}
     */
    last: { type: String, required: true },

    /**
     * The full name of the husbando.
     * @type {String}
     */
    full: { type: String, required: true },

    /**
     * The native name of the husbando.
     * @type {String}
     */
    native: String,

    /**
     * The user-preferred name of the husbando.
     * @type {String}
     */
    userPreferred: { type: String, required: true },

    /**
     * Alternative names for the husbando.
     * @type {Array}
     */
    alternative: [String],

    /**
     * Alternative spoiler names for the husbando.
     * @type {Array}
     */
    alternativeSpoiler: [String],
  },

  /**
   * The image URL associated with the husbando.
   * @type {Object}
   */
  image: {
    /**
     * The URL for the large image of the husbando.
     * @type {String}
     */
    large: String,
    medium: String,
  },

  /**
   * The number of favorites for the husbando.
   * @type {Number}
   */
  favourites: { type: Number, required: true },

  /**
   * The URL of the AniList page for the husbando.
   * @type {String}
   */
  siteUrl: { type: String, required: true },

  /**
   * The description of the husbando.
   * @type {String}
   */
  description: { type: String, required: true },

  /**
   * The age of the husbando.
   * @type {String}
   */
  age: String,

  /**
   * The gender of the husbando.
   * @type {String}
   */
  gender: { type: String, required: true },

  /**
   * The blood type of the husbando.
   * @type {String}
   */
  bloodType: String,

  /**
   * The date of birth of the husbando.
   * @type {Object}
   */
  dateOfBirth: {
    /**
     * The year of birth for the husbando.
     * @type {Number}
     */
    year: Number,

    /**
     * The month of birth for the husbando.
     * @type {Number}
     */
    month: Number,

    /**
     * The day of birth for the husbando.
     * @type {Number}
     */
    day: Number,
  },

  /**
   * The media details associated with the husbando.
   * @type {Object}
   */
  media: {
    /**
     * An array of nodes containing information about various media related to the husbando.
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
         * The cover image details for the media.
         * @type {Object}
         */
        coverImage: {
          /**
           * The URL for the medium-sized cover image of the media.
           * @type {String}
           */
          medium: { type: String, required: true },
        },

        /**
         * The banner image URL for the media.
         * @type {String}
         */
        bannerImage: String,

        /**
         * The title details for the media.
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
         * Synonyms for the media.
         * @type {Array}
         */
        synonyms: [String],

        /**
         * The popularity score for the media.
         * @type {Number}
         */
        popularity: Number,

        /**
         * The type of the media.
         * @type {String}
         */
        type: { type: String, required: true },

        /**
         * The format of the media.
         * @type {String}
         */
        format: { type: String, required: true },
      },
    ],
  },
});

/**
 * Represents the model for the Husbando.
 * @class Husbando
 */
const Husbando = model('Husbando', HusbandoSchema);

export default Husbando;
