'use strict';
const {
  hashPassword
} = require('../helper/hashpassword')
const sendEmail = require('../helper/sendEmail')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      User.hasMany(models.Todo)
    };
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Please insert your email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 10],
          msg: 'Password Must Be 6-10 character'
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: (User, option) => {
        User.password = hashPassword(User.password)
      },
      afterCreate: (User, option) => {
        sendEmail(User.email)
      }
    },
    sequelize,
    modelName: 'User'
  })
  return User;
};