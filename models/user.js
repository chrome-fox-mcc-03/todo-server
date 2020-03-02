'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models){
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'username cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          message: 'username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'email cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          message: 'email cannot be empty'
        },
        isEmail: {
          args: true,
          message: 'email must contain email format'
        }
      },
      unique: {
        args: true,
        message: 'email already in use'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        message: 'password cannot be empty'
      },
      validate: {
        len: {
          args: [5],
          message: 'password character cannot less than 5'
        }
      }
    }
  }, { sequelize })
  return User;
};