const axios = require('axios');

const getSimilarProducts = async (summary) => {
  try {
    // In production: Use vector DB with embeddings
    const response = await axios.get(`${process.env.PRODUCT_API_URL}/search?q=${summary}`);
    return response.data.products.slice(0, 5); // Return top 5 matches
  } catch (error) {
    console.error('Product API error:', error);
    return [];
  }
};

module.exports = { getSimilarProducts };