const express = require('express');
const router = express.Router();
const { processQuery } = require('../controllers/chatController');
const { register, login, getProfile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
//adding api
router.post('/process', processQuery);
router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth/profile', authMiddleware, getProfile);

module.exports = router;