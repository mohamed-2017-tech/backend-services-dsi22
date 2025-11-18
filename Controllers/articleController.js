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
//get all articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await Articl.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//upadate article
const updateArticle = async (req, res) => {
  try {
    const article = await Articl.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// delete article
const deleteArticle = async (req, res) => {
  try {
    const article = await Articl.findByIdAndDelete(req.params.id);
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  createArticle,
  getAllArticles,
  updateArticle,
  deleteArticle
  
}