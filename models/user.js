'use strict';

const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email has been registered"
      },
      validate: {
        notNull: {
          args: true,
          msg: 'Email cannot be empty!'
        },
        isEmail: {
          args: true,
          msg: 'Please input with valid email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password cannot be empty!'
        },
        len: {
          args: [5],
          msg: "Password at least 5 characters"
        }
      }
    }
  },
  {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = hashPassword(User.password)
      }
    },
    sequelize
  })

  User.associate = function(models) {
    User.hasMany(models.Todo)
  }
  
  return User;
};