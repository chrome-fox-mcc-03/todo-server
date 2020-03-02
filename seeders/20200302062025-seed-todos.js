'use strict';
const fs = require('fs')
let todos = JSON.parse(fs.readFileSync('./todos.json','utf8'))
todos.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
});
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
   return queryInterface.bulkInsert('todos', todos, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('todos', null, {});

  }
};
