const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create(name);
  const response = {
    id: newCategory.dataValues.id,
    name,
  };

  return response;
};

module.exports = {
  createCategory,
};