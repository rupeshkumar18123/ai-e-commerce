import React, { useState } from 'react';

const SignupForm = ({ onSignup, loading, error }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (name && email && password && password === confirmPassword) {
      onSignup(name, email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
      <input
        type="text"
        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="email"
        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        required
      />
      {touched && (!name || !email || !password || !confirmPassword) && (
        <div className="text-red-500 text-sm">All fields are required.</div>
      )}
      {touched && password && confirmPassword && password !== confirmPassword && (
        <div className="text-red-500 text-sm">Passwords do not match.</div>
      )}
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition font-semibold"
        disabled={loading}
      >
        {loading ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  );
};

export default SignupForm; 