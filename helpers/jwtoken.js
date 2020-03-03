const { sign, verify } = require('jsonwebtoken');

const generateToken = (payload) => {
  return sign({ 
    data: payload, 
    exp: Math.floor(Date.now() / 1000) + 60 * 60 }, 
    process.env.SECRET_KEY)
};

const verifyToken = (token, secret) => {
  return verify(token, process.env.SECRET_KEY);
};

module.exports = {
  generateToken,
  verifyToken,
};
