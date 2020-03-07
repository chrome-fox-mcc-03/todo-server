const { hashSync, genSaltSync, compareSync } = require('bcryptjs');

module.exports = {
  hash: (password) => {
      const salt = genSaltSync(+process.env.SALT);
      return hashSync(password, salt);
  },

  compare:(password, hashedPassword) => {
      return compareSync(password, hashedPassword);
  }
};
