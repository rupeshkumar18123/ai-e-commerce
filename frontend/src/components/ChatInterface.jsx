import React, { useState } from 'react';
import { sendMessage } from '../services/api';

const ChatInterface = ({ onResponse }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await sendMessage(input);
      onResponse(response);
      setInput('');
    } catch (error) {
      console.error('API Error:', error);
      alert('Failed to process request');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4 bg-white">
      <div className="flex max-w-4xl mx-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe what you're looking for..."
          className="flex-1 border rounded-l-lg px-4 py-3 focus:outline-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Find Products'}
        </button>
      </div>
    </form>
  );
};

export default ChatInterface;