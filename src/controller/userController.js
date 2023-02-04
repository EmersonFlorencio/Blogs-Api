const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, response } = await userService.userLogin(email, password);

  if (status === 400) return res.status(status).json({ message: response });

  return res.status(status).json({ token: response });
};

module.exports = {
  login,
};