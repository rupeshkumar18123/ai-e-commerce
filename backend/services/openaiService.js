// const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

// const analyzeInput = async (userInput) => {
//   const client = new OpenAIClient(
//     process.env.AZURE_OPENAI_ENDPOINT,
//     new AzureKeyCredential(process.env.AZURE_OPENAI_KEY)
//   );

//   const response = await client.getCompletions(
//     process.env.AZURE_DEPLOYMENT_NAME,
//     [
//       {
//         role: "user",
//         content: `Summarize this product requirement in 1 sentence: "${userInput}"`
//       }
//     ],
//     { maxTokens: 100 }
//   );

//   return response.choices[0].message.content.trim();
// };

// module.exports = { analyzeInput };

const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

const analyzeInput = async (userInput) => {
  const client = new OpenAIClient(
    process.env.AZURE_OPENAI_ENDPOINT,
    new AzureKeyCredential(process.env.AZURE_OPENAI_KEY)
  );

  const messages = [
    { role: "system", content: "You are a helpful product recommendation assistant." },
    { role: "user", content: `Summarize this product requirement in 1 sentence: "${userInput}"` }
  ];

  const result = await client.getChatCompletions(
    process.env.AZURE_DEPLOYMENT_NAME,
    messages,
    { maxTokens: 100 }
  );

  return result.choices[0].message.content.trim();
};

module.exports = { analyzeInput };


