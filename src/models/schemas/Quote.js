import mongoose from 'mongoose';

/**
 * Represents the schema for the Quote model.
 * @class QuoteSchema
 */
const QuoteSchema = new mongoose.Schema({
  /**
   * Unique identifier for the quote.
   * @type {Number}
   * @required
   */
  _id: { type: Number, required: true },

  /**
   * The actual quote text.
   * @type {string}
   * @required
   */
  quote: { type: String, required: true },

  /**
   * The name of the anime associated with the quote.
   * @type {string}
   */
  anime: { type: String },

  /**
   * The author of the quote.
   * @type {string}
   * @required
   */
  author: { type: String, required: true },
});

/**
 * Quote model for storing quotes.
 * @class Quote
 * @type {mongoose.Model<QuoteSchema>}
 */
const Quote = mongoose.model('Quote', QuoteSchema);

export default Quote;
