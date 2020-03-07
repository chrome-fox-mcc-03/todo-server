'use strict';
const { hash } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class User extends Model {
    static associate(models) {
      User.hasMany(models.Todo, { foreignKey: 'id' });
      User.belongsToMany(models.Project, {
        through: 'UserProject',
      });
    }
  }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'This email is already taken.'
      },
      validate: {
        notNull: { msg: 'Email cannot be null' },
        notEmpty: { args: true, msg: 'Passwrod cannot be empty' },
        isEmail: {
          args: true,
          msg: 'Email format is wrong',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Password cannot be null' },
        len: {
          args: [6],
          msg: 'Minimmum password length is 6',
        },
      },
    },
    projectId: DataTypes.INTEGER,
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        const users = user;
        users.password = hash(users.password);
      },
    },
  });
  return User;
};
