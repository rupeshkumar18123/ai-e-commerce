import React from 'react';

// ... existing imports ...

const Header = ({ onProfileClick, cartCount }) => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        <h1 className="ml-4 text-2xl font-bold text-indigo-600">ECart AI</h1>
      </div>
      <div className="flex items-center">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mr-4">
          Cart ({cartCount})
        </button>
        <div 
          className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
          onClick={onProfileClick}
        >
          <span className="font-medium">U</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;