import React, { useState } from 'react';

const LoginForm = ({ onLogin, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (email && password) {
      onLogin(email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
      <input
        type="email"
        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      {touched && (!email || !password) && (
        <div className="text-red-500 text-sm">Email and password are required.</div>
      )}
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition font-semibold"
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm; 