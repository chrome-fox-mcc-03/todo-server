'use strict';
const encrypt = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}
  User.init({
    Email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Must Be Filled in Email Format"
        }   
      }
    },
    Password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2],
          msg: "Password Must have At least 2 Characters"
        }
      }
    } 
  }, {hooks: {
    beforeCreate:function(user, options) {
      console.log(user)
      user.Password = encrypt(user.Password)
    }
  },sequelize, modelName: 'User'})
  User.associate = function(models) {
    User.hasMany(models.Todo)
    // associations can be defined here
  };
  return User;
};