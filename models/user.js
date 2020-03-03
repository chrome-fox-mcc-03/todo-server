'use strict';
const bcrypt = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model { }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }, 
      validate: {
        notNull: {
          msg: 'Please enter password'
        },
        isEmail: {
          msg: "please enter invalid email address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter password'
        },
        len: {
          args: [6],
          msg: "password at least 6 characters!"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcrypt.hashPassword(user.password);
      }
    },
    sequelize
  });

  User.associate = function (models) {
    User.hasMany(models.Todo);
  };
  return User;
};