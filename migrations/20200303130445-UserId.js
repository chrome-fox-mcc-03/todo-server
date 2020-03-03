'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Todos','UserId', Sequelize.INTEGER );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.deleteColumn('Todos', 'UserId');
  }
};
