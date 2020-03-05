'use strict';
const Helper = require('../helper/helper')
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize
  class User extends Model{
    static associate(models){
      User.hasMany(models.Todo)
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique : {
        args : true,
        msg : "Email Must Be Unique"
      },
    validate : {
      notEmpty : {
        args : true,
        msg: `Email Required`
      },
      isEmail : {
        args : true,
        msg: `Need to Input Valid Email`
      }
    }},
    password: {
      type:DataTypes.STRING,
      allowNull : false,
      validate: {
        notEmpty : {
          args : true,
          msg : `Password Must Be filled`
        },
        len : {
          args : [6, 20],
          msg : `Password must be more than 6 character and less than 20 character`
        }
      }}
  },{sequelize, 
    hooks : {
      beforeCreate : (user, opt) => {
        user.password = Helper.hashPassword(user.password)
      }
    }})
  return User;
};