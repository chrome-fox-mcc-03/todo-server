'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Todos', ['UserId'], {
      type: 'foreign key',
      name: 'UserId',
      references: {
        //Required field
        table: 'User',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Todos', 'UserId');
  }
};
