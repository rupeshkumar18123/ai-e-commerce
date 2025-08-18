
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

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Login failed';
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Signup failed';
  }
};

export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'Failed to fetch profile';
  }
};


// For production:
// const API_BASE_URL = process.env.REACT_APP_API_URL;