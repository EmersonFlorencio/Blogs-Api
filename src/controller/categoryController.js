const categoryService = require('../services/categoryService');

const createNewCategory = async (req, res) => {
  const { name } = req.body;
  const Category = await categoryService.createCategory(name);
  res.status(201).json(Category);
};

module.exports = {
  createNewCategory,
};