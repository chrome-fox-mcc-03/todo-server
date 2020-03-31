'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Todos', [{
        title: 'Fancy todo day 1',
        description: "Menyelesaikan todo fancy untuk day 1 phase 2",
        status: true,
        UserId: 1,
        due_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pulang tenggo day 1 ',
        description: "Pulang tepat waktu untuk hari pertama",
        status: true,
        UserId: 1,
        due_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Todos', null, {});
  }
};
