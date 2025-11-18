const express = require('express');
const router = express.Router();
const { createArticle, getAllArticles,deleteArticle,updateArticle} = require('../Controllers/articleController');

// Create a new article
router.post('/', createArticle).get('/all', getAllArticles);
router.delete('/:id', deleteArticle);
router.put('/:id', updateArticle);       
module.exports = router;

//get all articles
//http://localhost:3000/api/v1/articles/all