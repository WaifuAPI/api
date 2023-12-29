/**
 * Middleware to update data in the specified schema based on the provided _id.
 *
 * @param {string} schemaName - The name of the schema to use for data updating.
 * @returns {Function} Express middleware function.
 */
const updateData = schemaName => async (req, res, next) => {
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
     * Check if _id is provided in the request parameters.
     * @type {string}
     */
    const requestedId = req.params.id;
    if (!requestedId) {
      return res.status(400).json({ error: 'Missing id parameter' });
    }

    /**
     * Find the document with the specified _id.
     * @type {import('../../models/schemas').default}
     */
    const existingItem = await schema.default.findById(requestedId);

    /**
     * Check if the document exists.
     */
    if (!existingItem) {
      return res.status(404).json({ error: 'Document not found' });
    }

    /**
     * Update the existing document with the new data.
     */
    Object.assign(existingItem, data);

    /**
     * Save the updated document.
     */
    const result = await existingItem.save();

    /**
     * Respond with a JSON object indicating successful data update.
     */
    res.status(200).json({
      status: '200',
      message: 'Data updated successfully',
      result,
    });
  } catch (error) {
    /**
     * @errorHandling
     * Handle specific error cases and respond accordingly.
     */
    if (error.code === 11000) {
      return res.status(500).json({ error: 'Duplicate key value' });
    }

    /**
     * Log the encountered error for further investigation.
     */
    console.error('Error updating data:', error);

    /**
     * Respond with a JSON object containing a generic error message and a 500 Internal Server Error status.
     */
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default updateData;
