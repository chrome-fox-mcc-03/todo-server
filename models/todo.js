'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Todo extends Model{}

  Todo.init({
    title: {
      type :DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          args : true,
          msg : `Title can't be empty`
        }
      }},
    description: DataTypes.STRING,
    status: {
      type:DataTypes.BOOLEAN,
      defaultValue : false},
    due_date: {
      type : DataTypes.DATE,
      validate : {
        isAfter : {
          args : new Date().toISOString(),
          msg : "Cant Put Date before now"}
      }}
  }, {sequelize})
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};