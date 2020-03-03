'use strict';
module.exports = (sequelize, DataTypes) => {
  class ToDo extends sequelize.Sequelize.Model {}

  ToDo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100]
      },
    },
    description: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: new Date().toString()
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(todo, options) {
        if(!todo.description) todo.description = 'No description added.'
      }
    },
    sequelize
  });
  ToDo.associate = function(models) {
    // associations can be defined here
    ToDo.belongsTo(models.User)
  };
  return ToDo;
};