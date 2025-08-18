import React from 'react';

// ... existing imports ...

const Header = ({ onProfileClick, cartCount, onCartClick }) => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        <h1 className="ml-4 text-2xl font-bold text-indigo-600">ECart AI</h1>
      </div>
      <div className="flex items-center">
        <button
          className="relative bg-indigo-600 text-white px-4 py-2 rounded-md mr-4 flex items-center"
          onClick={onCartClick}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 008.48 19h7.04a2 2 0 001.83-1.3L17 13M7 13V6h10v7" /></svg>
          Cart
          {cartCount > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 text-xs absolute -top-2 -right-2">{cartCount}</span>
          )}
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