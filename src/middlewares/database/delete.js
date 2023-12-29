/**
 * Middleware to delete data from the specified schema based on the provided _id.
 *
 * @param {string} schemaName - The name of the schema to use for data deletion.
 * @returns {Function} Express middleware function.
 */
const deleteData = schemaName => async (req, res, next) => {
  try {
    /**
     * Dynamically import the schema based on the provided schemaName.
     * @type {import('../../models/schemas').default}
     */
    const schema = await import(`../../models/schemas/${schemaName}.js`);

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
     * Delete the document.
     */
    await existingItem.remove();

    /**
     * Respond with a JSON object indicating successful data deletion.
     */
    res.status(200).json({
      status: '200',
      message: 'Data deleted successfully',
      result: existingItem,
    });
  } catch (error) {
    /**
     * Log the encountered error for further investigation.
     */
    console.error('Error deleting data:', error);

    /**
     * Respond with a JSON object containing a generic error message and a 500 Internal Server Error status.
     */
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default deleteData;
