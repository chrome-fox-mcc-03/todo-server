'use strict';
const { hashPass } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{
    get name(){
      return `${this.first_name} ${this.last_name}`
    }
  }
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
      unique: {
        msg: 'Username already exists.'
      },
      validate: {
        len: {
          args: [5],
          msg: 'Username has the minimum of 5 characters.'
        },
        is: {
          args: /^[a-zA-Z0-9_]+$/,
          msg: 'Username can only contain letters, numbers, and underscore (_)'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Email has been used.'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8],
          msg:  'Password has the minimum of 8 characters.'
        }
      }
    }
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