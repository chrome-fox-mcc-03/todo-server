'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      email:'johndoe@mail.com',
      password:'johndoe',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email:'joko@mail.com',
      password:'joko',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email:'wanwan@mail.com',
      password:'wanwan',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {}); 
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
