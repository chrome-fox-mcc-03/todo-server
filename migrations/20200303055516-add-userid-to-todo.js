'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Todos','UserId', Sequelize.INTEGER,{after:'due_date'});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Todos','UserId')
  }
};
