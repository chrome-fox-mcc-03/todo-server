'use strict';
const hashPassword = require('./../helper/bcrypt').hashPass
module.exports = (sequelize, DataTypes) => {
  class user extends sequelize.Sequelize.Model{}
  user.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Input must be email"
        }
      },
      unique: {
        args: true,
        msg: "email already in use"
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2],
          msg: "password must be greater than 2 characters"
        }
      }
    }
  },{
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: "user"
  })
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.todo)
  };
  return user;
};