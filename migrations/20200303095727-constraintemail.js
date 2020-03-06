'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addConstraint('Users', ['Email'], {
      type: 'unique',
      name: 'custom_unique_constraint_name'
    })
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.removeConstraint('Users', 'Email', {})
  }
};
