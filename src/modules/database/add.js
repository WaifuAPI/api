const incrementData = schemaName => async (req, res, next) => {
  try {
    // Dynamically import the schema based on the provided schemaName
    const schema = await import(`../../models/schemas/${schemaName}.js`);

    const Data = req.body;

    // Find the document with the highest _id value
    const highestIdDocument = await schema.default.findOne({}, {}, { sort: { _id: -1 } });

    // Calculate the next _id value
    const nextItemId = (highestIdDocument && highestIdDocument._id ? highestIdDocument._id : 0) + 1;

    // Create a new document with the incremented _id and other data
    const newItem = { _id: nextItemId, ...Data }; // Spread the properties of Data

    // Save the new document
    const result = await schema.default.create(newItem);

    res.status(200).json({
        status: '200',
        message: 'Data added successfully',
        result
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(500).json({ error: 'Duplicate key value' });
    }
    console.error('Error adding data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default incrementData;
