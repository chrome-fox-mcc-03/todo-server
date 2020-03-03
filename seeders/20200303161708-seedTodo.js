'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [{
      title: "puasa full gk bolong bolong",
      description: "puasa harus full jangan mampir ke warteg",
      due_date: "NOW()",
      status: false,
      UserId: 5,
      createdAt: "NOW()",
      updatedAt: "NOW()"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
