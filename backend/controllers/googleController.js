const axios = require('axios');
const { generateProductDescription } = require('../services/llmService');

const searchGoogleProducts = async (req, res) => {
  try {
    const { q } = req.query;

    const response = await axios.get('https://serpapi.com/search', {
      params: {
        api_key: process.env.SERPAPI_KEY,
        engine: 'google_shopping',
        q: q,
        gl: 'us'
      }
    });

    const products = response.data.shopping_results || [];

    const formattedProducts = [];

    for (const product of products.slice(0, 5)) {
      const formattedProduct = {
        id: product.position,
        title: product.title,
        description: product.extracted_price ? `${product.extracted_price} USD` : 'No price info',
        price: product.extracted_price || null,
        thumbnail: product.thumbnail,
        link: product.link,
        rating: product.rating,
        reviews_count: product.reviews,
        llmDescription: await generateProductDescription(q, product),
      };
      formattedProducts.push(formattedProduct);
    }

    res.json(formattedProducts);

  } catch (error) {
    console.error('Google Shopping API error:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to search products' });
  }
};

module.exports = { searchGoogleProducts };
