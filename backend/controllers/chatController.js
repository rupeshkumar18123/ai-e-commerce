// const { analyzeInput } = require('../services/openaiService');
// const { getSimilarProducts } = require('../services/productService');

// const processQuery = async (req, res) => {
//   try {
//     const { message } = req.body;
    
//     // Step 1: Analyze input
//     const summary = await analyzeInput(message);
    
//     // Step 2: Find similar products
//     const products = await getSimilarProducts(summary);
    
//     res.json({ summary, products });
//   } catch (error) {
//     console.error('Processing error:', error);
//     res.status(500).json({ error: 'AI processing failed' });
//   }
// };

// module.exports = { processQuery };

const { analyzeInput } = require('../services/openaiService');

const processQuery = async (req, res) => {
  try {
    const { message } = req.body;
    
    // Generate summary using LLM
    const summary = await analyzeInput(
      `Summarize this product requirement in 1-2 sentences: "${message}"`
    );
    
    res.json({ summary });
  } catch (error) {
    console.error('Processing error:', error);
    res.status(500).json({ error: 'AI processing failed' });
  }
};

module.exports = { processQuery };