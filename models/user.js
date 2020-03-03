'use strict';
const {
  hashPassword
} = require('../helper/hashpassword')
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
        },
        // unique: {
        //   args: false,
        //   msg: 'Email address already in use!'
        // }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 10],
          msg: 'Password Must Be 6-10 character'
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: (User, option) => {
        User.password = hashPassword(User.password)
      }
    },
    sequelize,
    modelName: 'User'
  })
  return User;
};