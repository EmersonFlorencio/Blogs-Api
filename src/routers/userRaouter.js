const express = require('express');
const userController = require('../controller/userController');
const validateUser = require('../middlewares/validateUser');

const routers = express.Router();

routers.post('/', validateUser, userController.createNewUser);

module.exports = routers;