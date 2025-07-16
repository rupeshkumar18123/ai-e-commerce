const express = require('express');
const router = express.Router();
const { searchGoogleProducts } = require('../controllers/googleController');

router.get('/google-search', searchGoogleProducts);

module.exports = router;