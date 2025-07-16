
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api';

// export const sendMessage = async (message) => {
//   const response = await axios.post(`${API_BASE_URL}/process`, {
//     message
//   });
//   return response.data;
// };
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/process`, { message });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to process request');
  }
};

export const searchGoogleProducts = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/google-search`, {
      params: { q: query }
    });
    return response.data;
  } catch (error) {
    console.error('Google Search Error:', error);
    return [];
  }
};


// For production:
// const API_BASE_URL = process.env.REACT_APP_API_URL;