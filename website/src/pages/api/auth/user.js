// api/user.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, email, token } = req.body;
    const apiKey = process.env.ACCESS_KEY; // Replace 'API_KEY' with the actual environment variable name that holds your API key

    if (!id && !token) {
      return res.status(400).json({ message: 'User ID and Token missing in the request body' });
    }

    try {
      if (email) {
        const api_response = await axios.get(`${process.env.API_URL}/api/user`, {
          headers: {
            key: apiKey,
            id,
            email,
          },
        });
        res.json(api_response.data);
      } else if (token) {
        const api_response = await axios.post(`${process.env.API_URL}/api/user`,
        {
          id,
          token,
          email,
        },
        {
          headers: {
            key: apiKey,
          },
        });
        console.log(api_response);
        res.json(api_response.data);
      }
    } catch (error) {
      console.error('Error performing the request:', error);
      res.status(500).json({ error: 'Error performing the request' });
    }
  } else {
    return res.status(405).end(); // Method Not Allowed for other request types
  }
}
