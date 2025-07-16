const { analyzeInput } = require('./openaiService');

const generateProductDescription = async (userQuery, product) => {
  try {
    const prompt = `
      Explain why this product matches the user's requirement: "${userQuery}".
      Product: ${product.title}
      Features: ${product.features.join(', ')}
      
      Write a concise 1-2 sentence explanation highlighting the key benefits in a natural, human-like way.
    `;
    
    return await analyzeInput(prompt);
  } catch (error) {
    console.error('LLM description error:', error);
    return "This product matches your requirements based on its features and specifications.";
  }
};

module.exports = { generateProductDescription };