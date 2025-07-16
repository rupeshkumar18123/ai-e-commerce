import React, { useState } from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import ProductList from './components/ProductList';
import Profile from './components/Profile';

function App() {
  const [summary, setSummary] = useState('');
  const [activeView, setActiveView] = useState('chat');
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleResponse = (data) => {
    setSummary(data.summary);
    setActiveView('products');
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header 
        onProfileClick={() => setActiveView('profile')} 
        cartCount={cartCount}
      />
      <div className="flex-1 overflow-auto p-4">
        {activeView === 'profile' ? (
          <Profile />
        ) : activeView === 'products' ? (
          <ProductList 
            summary={summary} 
            onBack={() => setActiveView('chat')}
            addToCart={addToCart}
          />
        ) : (
          <div className="text-center py-10">
            <h2 className="text-xl font-semibold">Describe your product needs</h2>
            <p className="text-gray-500">Our AI assistant will find the best matches</p>
          </div>
        )}
      </div>
      {activeView === 'chat' && <ChatInterface onResponse={handleResponse} />}
    </div>
  );
}

export default App;