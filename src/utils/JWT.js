const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'secretJWT';

const createdToken = (payload) => jwt.sign(payload, secret, { algorithm: 'HS256' });

const auth = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  let payload;
  try {
    payload = jwt.verify(token, secret);
    console.log('validação:', payload);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
// codigo ultilizado na mentoria cronicas de token link https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/live-lectures/dfb5e745-21f2-494b-bfd2-cdc6f6978675/recording/6b2377f1-1580-405c-a738-2c49e41e662d
};

module.exports = {
  createdToken,
  auth,
};
