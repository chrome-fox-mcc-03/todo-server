'use strict';


const fs = require('fs')
let dummyData = JSON.parse(fs.readFileSync('./dummyTodo.json', 'utf8'))

dummyData.forEach(element => {
    element.createdAt = new Date()
    element.updatedAt = new Date()
});

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Todos', dummyData, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Todos', null, {});
  }
};
