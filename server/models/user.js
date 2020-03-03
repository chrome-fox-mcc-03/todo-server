'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      User.hasMany(models.Todo);
    }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: 'Email is not in valid format'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            arg: [6, 10],
            msg: 'Password is between 6 to 8 characters'
          }
        }
      }
    },
    {
      hooks: {
        // to hash password
      },
      sequelize,
      modelName: 'User'
    }
  );

  return User;
};
