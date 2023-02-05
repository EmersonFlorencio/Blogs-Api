const express = require('express');
const validateCategory = require('../middlewares/validateCategory');
const categoryController = require('../controller/categoryController'); 
const { auth } = require('../utils/JWT');

const routers = express.Router();

routers.post('/', auth, validateCategory, categoryController.createNewCategory);

module.exports = routers;