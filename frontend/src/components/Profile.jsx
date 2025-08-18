import React, { useEffect, useState } from 'react';
import { getProfile } from '../services/api';

const Profile = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Not authenticated');
        const data = await getProfile(token);
        setUser(data);
      } catch (err) {
        setError(err.message || err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading profile...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mr-6">
          <span className="text-4xl font-bold text-indigo-600">{user.name?.[0] || 'U'}</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <button
        className="mb-8 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        onClick={onLogout}
      >
        Logout
      </button>
      {/* Additional profile info can go here */}
    </div>
  );
};

export default Profile;
