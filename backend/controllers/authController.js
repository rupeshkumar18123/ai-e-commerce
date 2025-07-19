const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = []; // In-memory user store
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_key';

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const existing = users.find(u => u.email === email);
  if (existing) {
    return res.status(409).json({ error: 'Email already registered.' });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, name, email, password: hashed };
  users.push(user);
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '2h' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '2h' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
};

const getProfile = (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ id: user.id, name: user.name, email: user.email });
};

module.exports = { register, login, getProfile }; 