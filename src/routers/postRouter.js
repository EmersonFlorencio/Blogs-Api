const express = require('express');
const postController = require('../controller/postController');
const { auth } = require('../utils/JWT');

const routers = express.Router();

routers.get('/', auth, postController.getAllPosts);

module.exports = routers;