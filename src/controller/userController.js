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

const getAllUsers = async (_req, res) => {
  const { status, response } = await userService.getAllUsers();
  return res.status(status).json(response);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, response } = await userService.getUserById({ id });
  if (status === 404) return res.status(status).json({ message: response });

  return res.status(status).json(response);
};

module.exports = {
  login,
  createNewUser,
  getAllUsers,
  getUserById,
};