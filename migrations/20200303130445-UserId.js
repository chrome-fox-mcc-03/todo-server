'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Todos','UserId', {
      type : Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'cascade',
      onDelete: 'restrict'} );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Todos', 'UserId');
  }
};
