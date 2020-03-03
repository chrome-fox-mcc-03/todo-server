'use strict';

const { hashPassword } = require("../helpers/bcrypts.js")

module.exports = (sequelize, DataTypes) => {
  // const User = sequelize.define('User', {
    class User extends sequelize.Sequelize.Model {}
    User.init({
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Please enter valid email format e.g. 'john_doe@domain.com'"
          }
        },
        unique: {
          args: true,
          msg: "Email has been used."
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [8,16],
            msg: "Passwords must be between 8-16 characters long"
          }
        }
      }
    } , {
      hooks: {
        beforeCreate: (user, option) => {
          user.password = hashPassword(user.password)
        },

        beforeUpdate: (user, option) => {
          user.password = hashPassword(user.password)
        }
      },
      sequelize,
      modelName: "User"
    });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  return User;
};