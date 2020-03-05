'use strict';
const { hashPassword } = require('../helper/bcrypt')

module.exports = (sequelize, DataTypes) => {
  // const User = sequelize.define('User', {
  //   email: DataTypes.STRING,
  //   password: DataTypes.STRING
  // }, {});

  class User extends sequelize.Sequelize.Model{}
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {args: true, msg: "Please fill your email"},   //true
        isEmail: {args: true, msg: "Please use email format"},
      }
    }, password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {args: true, msg: "Please fill your password"},   //true
        len: {args: [4], msg: "Please add password at least 4 character"} 
      }
    }
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = hashPassword(User.password)
      }
    },
    sequelize, modelName: 'User'})


  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  return User;
};