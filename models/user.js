'use strict';
const {encrypt,jwt} = require('../helpers')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(user) {
        user.password = encrypt(user.password)
      }
    },
    sequelize
  });
  User.associate = function(models) {
    User.hasMany(models.Todo)
  };
  return User;
};