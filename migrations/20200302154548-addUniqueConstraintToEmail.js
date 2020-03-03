'use strict';

module.exports = {
  up: (queryInterface) => queryInterface.addConstraint('Users', ['email'], {
    type: 'unique',
    name: 'unique_email_constraint',
  }),

  down: (queryInterface) => queryInterface.removeConstraint('Users', 'unique_email_constraint'),
};
