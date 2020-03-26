'use strict';

const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Make sure you are submitting an email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5],
          msg: 'Password should be at least 5 characters'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = hashPassword(User.password)
      }
    },
    sequelize,
    modelName: 'User'
  })

  User.associate = function(models) {
    User.hasMany(models.Todo)
  };
  return User;
};