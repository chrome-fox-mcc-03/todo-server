'use strict';
const { hashpw } = require('../helper/HelperBcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      User.belongsToMany(models.ProjectTeam,{ through: 'Project' })
      User.hasMany(models.Todo)
    }
  }

  User.init({
    username: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Please Insert username'
        },
        notEmpty: {
          args: true,
          msg: "Please insert Username"
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          args: true,
          msg: "Please insert email"
        },
        isEmail: {
          args: true,
          msg: "Please insert Email within @"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "please insert The password"
        },
        len: {
          args: [6],
          msg: "Please insert password minimun 6 letter"
        }
      }
    }
  },{sequelize,
    hooks: {
      beforeCreate: (user,optino) => {
        const pw = hashpw(user.password)
        user.password = pw
      }
    }
  })

  return User
};