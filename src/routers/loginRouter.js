const express = require('express');
const userController = require('../controller/userController');
const validateLogin = require('../middlewares/validateLogin');

const routers = express.Router();

routers.post('/', validateLogin, userController.login);

module.exports = routers;