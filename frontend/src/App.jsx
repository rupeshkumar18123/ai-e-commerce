import React, { useState } from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import ProductList from './components/ProductList';
import Profile from './components/Profile';
import Home from './components/Home';
import Modal from './components/Modal';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Cart from './components/Cart';
import { login as loginApi, signup as signupApi } from './services/api';

function App() {
  const [summary, setSummary] = useState('');
  const [activeView, setActiveView] = useState('chat');
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });
  const [showCart, setShowCart] = useState(false);

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

  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
    setCartCount(prev => Math.max(0, prev - 1));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCart(prevCart => prevCart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleLogin = async (email, password) => {
    setLoginLoading(true);
    setLoginError('');
    try {
      const data = await loginApi(email, password);
      setUser(data.user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setShowLogin(false);
    } catch (err) {
      setLoginError(err);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignup = async (name, email, password) => {
    setSignupLoading(true);
    setSignupError('');
    try {
      const data = await signupApi(name, email, password);
      setUser(data.user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setShowSignup(false);
    } catch (err) {
      setSignupError(err);
    } finally {
      setSignupLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setActiveView('home');
  };

  return (
    <div className="flex flex-col h-screen">
      <Header 
        onProfileClick={() => setActiveView('profile')} 
        cartCount={cartCount}
        onCartClick={() => setShowCart(true)}
      />
      <div className="flex-1 overflow-auto p-4">
        {activeView === 'profile' ? (
          <Profile onLogout={handleLogout} />
        ) : activeView === 'products' ? (
          <ProductList 
            summary={summary} 
            onBack={() => setActiveView('chat')}
            addToCart={addToCart}
          />
        ) : activeView === 'chat' ? (
          <div className="text-center py-10">
            <h2 className="text-xl font-semibold">Describe your product needs</h2>
            <p className="text-gray-500">Our AI assistant will find the best matches</p>
          </div>
        ) : (
          <Home 
            onLoginClick={() => setShowLogin(true)} 
            onSignupClick={() => setShowSignup(true)} 
          />
        )}
      </div>
      {activeView === 'chat' && <ChatInterface onResponse={handleResponse} />}
      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)}>
        <LoginForm onLogin={handleLogin} loading={loginLoading} error={loginError} />
      </Modal>
      <Modal isOpen={showSignup} onClose={() => setShowSignup(false)}>
        <SignupForm onSignup={handleSignup} loading={signupLoading} error={signupError} />
      </Modal>
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <Cart
            cart={cart}
            onRemove={handleRemoveFromCart}
            onQuantityChange={handleQuantityChange}
            onClose={() => setShowCart(false)}
          />
        </div>
      )}
    </div>
  );
}

export default App;