'use strict';
const {encrypt,jwt} = require('../helpers')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      isEmail:true,
      unique: true
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    }
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