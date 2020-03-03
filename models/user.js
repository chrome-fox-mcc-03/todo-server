'use strict';
const { hashPass } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'First name cannot be empty.'
        }
      }
    },
    last_name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: {
          args: [5],
          msg: 'Username has the minimum of 5 characters.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email.'
        }
      }
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        hashPass(user)
        if(!user.last_name) user.last_name = user.first_name
      }
    },
    sequelize,
    modelName: 'User'
  });
  User.associate = function(models) {
    User.hasMany(models.Todo, {
      foreignKey: 'user_id'
    })
  };
  return User;
};