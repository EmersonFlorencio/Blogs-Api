const categoryService = require('../services/categoryService');

const createNewCategory = async (req, res) => {
  const { name } = req.body;
  const Category = await categoryService.createCategory(name);
  res.status(201).json(Category);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoryService.getAllCategories();
  res.status(200).json(categories);
};

module.exports = {
  createNewCategory,
  getAllCategories,
};