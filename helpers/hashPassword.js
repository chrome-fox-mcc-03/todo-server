'use strict';

const bcrypt = require('bcryptjs');

const hashPassword = password => {
  const salt = bcrypt.genSaltSync(Number(process.env.SALT));
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { hashPassword, comparePassword };
 