'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [{
      title: 'Listenig to Halsey',
      description : 'Music : You Should be Sad',
      status : false,
      due_date : new Date(),
      createdAt : new Date(),
      updatedAt : new Date(),
      UserId : 1
    },{
      title: 'Listenig to Utada Hikaru',
      description : 'Music : First Love',
      status : false,
      due_date : new Date(),
      createdAt : new Date(),
      updatedAt : new Date(),
      UserId : 1
    },{
      title: 'Listenig to Andmesh',
      description : 'Music : Extraordinary Love',
      status : false,
      due_date : new Date(),
      createdAt : new Date(),
      updatedAt : new Date(),
      UserId : 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
