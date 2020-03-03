"use strict";
const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "email must be filled"
          },
          notEmpty: {
            args: true,
            msg: "email must be filled"
          },
          isEmail: {
            args: true,
            msg: "email must be filled with a valid email"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6],
            msg: "password must be at least 6 characters long"
          },
          notNull: {
            args: "password must be filled"
          },
          notEmpty: {
            args: true,
            msg: "password must be filled"
          }
        }
      }
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hashPassword(user.password);
        }
      }
    }
  );
  User.associate = function(models) {
    User.hasMany(models.Todo);
  };
  return User;
};
