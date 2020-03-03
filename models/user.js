'use strict';
const { hashPassword } = require('../helpers')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models){
      User.hasMany(models.Todo)
      User.hasMany(models.GroupUser)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'username cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'email cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'email cannot be empty'
        },
        isEmail: {
          args: true,
          msg: 'email must contain email format'
        }
      },
      unique: {
        args: true,
        msg: 'email already in use'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'password cannot be empty'
      },
      validate: {
        len: {
          args: [5],
          msg: 'password character cannot less than 5'
        }
      }
    }
  }, { 
    sequelize,
    hooks: {
      beforeCreate: (user, opt) => {
        user.password = hashPassword(user.password)
      }
    }
   })
  return User;
};