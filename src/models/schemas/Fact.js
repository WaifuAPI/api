import mongoose from 'mongoose';

/**
 * Represents the schema for the Fact model.
 * @class FactSchema
 */
const FactSchema = new mongoose.Schema({
  /**
   * Unique identifier for the fact.
   * @type {Number}
   */
  _id: { type: Number },

  /**
   * The actual fact text.
   * @type {string}
   * @required
   */
  fact: { type: String, required: true },

  /**
   * Tags associated with the fact.
   * @type {Array<string>}
   * @required
   */
  tags: { type: [String], required: true },

  /**
   * The length of the fact.
   * @type {Number}
   */
  length: { type: Number },
});

/**
 * Fact model for storing facts.
 * @class Fact
 * @type {mongoose.Model<FactSchema>}
 */
const Fact = mongoose.model('Fact', FactSchema);

export default Fact;
