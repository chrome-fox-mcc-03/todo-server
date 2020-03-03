'use strict';
const { hash } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate(models) {
      User.hasMany(models.Todo)
      User.belongsToMany(models.Group, {
        through: models.Member
      })
    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'username cannot be empty'
        },
        notEmpty: {
          msg: 'Username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email already used'
      },
      validate: {
        notNull: {
          msg: 'email cannot be empty'
        },
        notEmpty: {
          msg: 'email cannot be empty'
        },
        isEmail: {
          msg: 'Wrong email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'email cannot be empty'
        },
        notEmpty: {
          msg: 'email cannot be empty'
        },
        len: {
          args: [3],
          msg: 'Password length must more than three characters'
        }
      }
    }
  }, {
    sequelize,
  hooks: {
    beforeCreate: (user, options) => {
      const hashed = hash(user.password)
      user.password = hashed
    }
  }});
  
  return User;
};