'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
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
    }]
    return queryInterface.bulkInsert('Users', data, {}); 
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
