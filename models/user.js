'use strict';

const { generatePassword } = require('../helper/bycrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model { }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'invalid email format'
        }
      }
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = generatePassword(User.password);
      }
    },
    sequelize
  });

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};