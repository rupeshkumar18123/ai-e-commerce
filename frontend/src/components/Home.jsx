import React from 'react';

const Home = ({ onLoginClick, onSignupClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-purple-700">E-Commerce AI Platform</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl text-center">
        Welcome to the E-Commerce AI Platform! This project leverages AI to help you find the best products tailored to your needs. Enjoy seamless shopping, smart recommendations, and a modern cart experience. Sign up or log in to get started!
      </p>
      <div className="flex gap-4">
        <button
          className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          onClick={onLoginClick}
        >
          Login
        </button>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          onClick={onSignupClick}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home; 