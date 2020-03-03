'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {};
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "User field is required"
        },
        notEmpty: {
          args: true,
          msg: "Email field cannot be empty"
        },
        isEmail: {
          args: true,
          msg: "Wrong email format"
        }
      },
      unique: {
        args: true,
        msg: "Email already in use",
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: "Minimum password length is 6"
        }
      }
    }
  }, {
    sequelize,
    modelName: "User"
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  return User;
};