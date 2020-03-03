'use strict';
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
    Password: DataTypes.STRING
  }, {sequelize, modelName: 'User'})
  User.associate = function(models) {
    User.hasMany(models.Todo)
    // associations can be defined here
  };
  return User;
};