'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [
      {
        title:'Kerjain Todos',
        description:'Kerjain todos agar phase 2 lancar',
        status: false,
        due_date: '2020-03-06',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:'Baca You dont know JS',
        description:'Perdalam JS',
        status: false,
        due_date: '2020-04-01',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:'Olahraga',
        description:'Sehat',
        status: false,
        due_date: '2020-03-04',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {})
  }
};
