'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', ['username'], {
      type: 'unique',
      name: 'custom_unique_un'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', 'custom_unique_un')
  }
};
