const updateData = schemaName => async (req, res, next) => {
  try {
    // Dynamically import the schema based on the provided schemaName
    const schema = await import(`../../models/schemas/${schemaName}.js`);

    const Data = req.body;

    // Check if _id is provided in the request
    const requestedId = req.params.id; // Assuming the id is in the request parameters

    if (!requestedId) {
      return res.status(400).json({ error: 'Missing id parameter' });
    }

    // Find the document with the specified _id
    const existingItem = await schema.default.findById(requestedId);

    if (!existingItem) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Update the existing document with the new data
    Object.assign(existingItem, Data);

    // Save the updated document
    const result = await existingItem.save();

    res.status(200).json({
      status: '200',
      message: 'Data updated successfully',
      result,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(500).json({ error: 'Duplicate key value' });
    }
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default updateData;
