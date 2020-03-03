const bcrypt = require("bcrypt");

function hashPassword(pasword) {
  const salt = bcrypt.genSaltSync(4);
  const hash = bcrypt.hashSync(pasword, salt);
  return hash;
}

function checkPassword(pasword, passwordHashed) {
  return bcrypt.compareSync(pasword, passwordHashed);
}

module.exports = {
  hashPassword,
  checkPassword
};
