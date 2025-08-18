import React from 'react';

const Cart = ({ cart, onRemove, onQuantityChange, onClose }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg relative">
      <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold" onClick={onClose}>&times;</button>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-gray-500 text-center py-8">Your cart is empty.</div>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200 mb-4">
            {cart.map(item => (
              <li key={item.id} className="flex items-center justify-between py-3">
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-500">${item.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onQuantityChange(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                  <button onClick={() => onRemove(item.id)} className="ml-2 text-red-500 hover:text-red-700">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold text-lg mb-4">Total: ${total.toFixed(2)}</div>
          <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart; 