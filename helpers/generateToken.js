'use strict';

const SECRET = process.env.SECRET;
const JWT = require('jsonwebtoken');

const generateToken = payload => {
  return JWT.sign(payload, SECRET);
};

const verifyToken = token => {
  return JWT.verify(token, SECRET);
};

module.exports = { generateToken, verifyToken };
