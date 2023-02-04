const { User } = require('../models');
const { createdToken } = require('../utils/JWT');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return { status: 400, response: 'Invalid fields' };
  }

  const token = createdToken({ email });

  return { status: 200, response: token };
};

const createNewUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email, password } });

  if (user) return { status: 409, response: 'User already registered' };

  await User.create({ displayName, email, password, image });

  const token = createdToken(email);

  return { status: 201, response: token };
};

module.exports = {
  userLogin,
  createNewUser,
};
