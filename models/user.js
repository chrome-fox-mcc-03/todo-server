'use strict';
const { hashPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Email cannot empty'
        },
        isEmail: {
          args: true,
          msg: 'Email format wrong'
        }
      },
      unique: {
        args: true,
        msg: 'Email has been registered'
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: 'Password at least 6 character'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = hashPassword(User.password)
      }
    }, 
    sequelize
  })
  User.associate = function(models) {
    User.hasMany(models.Todo)
  };
  return User;
};