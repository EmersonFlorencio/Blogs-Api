const express = require('express');
const userController = require('../controller/userController');
const validateUser = require('../middlewares/validateUser');
const { auth } = require('../utils/JWT');

const routers = express.Router();

routers.post('/', validateUser, userController.createNewUser);
routers.get('/', auth, userController.getAllUsers);
routers.get('/:id', auth, userController.getUserById);

module.exports = routers;