const express = require('express');
const router = express.Router();
const { createArticle } = require('../Controllers/articleController');

// Create a new article
router.post('/', createArticle);        
module.exports = router;
