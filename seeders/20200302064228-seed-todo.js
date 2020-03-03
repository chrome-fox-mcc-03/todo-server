'use strict';
//after create 2 users
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [{
      title: 'todo 01',
      description: "lorem ipsum dolor sit amet",
      status: "todo",
      due_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    }, {
      title: 'todo 02',
      description: "consectetur adipiscing elit",
      status: "todo",
      due_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
