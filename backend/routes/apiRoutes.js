const express = require('express');
const router = express.Router();
const { processQuery } = require('../controllers/chatController');

router.post('/process', processQuery);

module.exports = router;