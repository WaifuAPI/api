/**
 * Middleware to increment data with a new document in the specified schema.
 *
 * @param {string} schemaName - The name of the schema to use for data incrementation.
 * @returns {Function} Express middleware function.
 */
const incrementData = schemaName => async (req, res, next) => {
  try {
    /**
     * Dynamically import the schema based on the provided schemaName.
     * @type {import('../../models/schemas').default}
     */
    const schema = await import(`../../models/schemas/${schemaName}.js`);

    /**
     * Extract the data from the request body.
     */
    const data = req.body;
    if (!data) {
      return res.status(400).json({ error: 'Missing data body' });
    }

    /**
     * Find the document with the highest _id value.
     * @type {import('../../models/schemas').default}
     */
    const highestIdDocument = await schema.default.findOne({}, {}, { sort: { _id: -1 } });

    /**
     * Calculate the next _id value.
     */
    const nextItemId = (highestIdDocument && highestIdDocument._id ? highestIdDocument._id : 0) + 1;

    /**
     * Create a new document with the incremented _id and other data.
     */
    const newItem = { _id: nextItemId, ...data }; // Spread the properties of data

    /**
     * Save the new document.
     */
    const result = await schema.default.create(newItem);

    /**
     * Respond with a JSON object indicating successful data addition.
     */
    res.status(200).json({
      status: '200',
      message: 'Data added successfully',
      result,
    });
  } catch (error) {
    /**
     * @errorHandling
     * Determine the appropriate error message based on the type of error caught.
     */
    let errorMessage = 'Internal Server Error';

    switch (true) {
      case error.code === 11000:
        errorMessage = 'Duplicate key value';
        break;

      case error.name === 'ValidationError':
        errorMessage = 'Missing key value';
        break;
    }

    /**
     * Log the encountered error for further investigation.
     */
    console.error('Error encountered while adding data:', error);

    /**
     * Respond with a JSON object containing the determined error message and a 500 Internal Server Error status.
     */
    res.status(500).json({ error: errorMessage });
  }
};

export default incrementData;
