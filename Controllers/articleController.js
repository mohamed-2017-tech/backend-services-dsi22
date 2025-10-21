const Articl = require('../Models/article');

// Create a new article     
const createArticle = async (req, res) => {
  try {
    const article = new Articl(req.body);
    await article.save();
    res.status(201).json(article);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createArticle
};