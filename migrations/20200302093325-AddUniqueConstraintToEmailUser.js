'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addConstraint('Users', ['email'], {
     type : 'unique',
     name : 'unique email for user'
   })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeConstraint('Users', 'unique email for user', {})
  }
};
