const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, response } = await userService.userLogin(email, password);

  if (status === 400) return res.status(status).json({ message: response });

  return res.status(status).json({ token: response });
};

const createNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, response } = await userService.createNewUser(displayName, email, password, image);

  if (status === 409) return res.status(status).json({ message: response });

  return res.status(status).json({ token: response });
};

module.exports = {
  login,
  createNewUser,
};