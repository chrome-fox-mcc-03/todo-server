'use strict';
const { hashPassword } = require('../helpers')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: "user",
      email: "user@mail.com",
      password: `${hashPassword("12345")}`,
      createdAt: "NOW()",
      updatedAt: "NOW()"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
