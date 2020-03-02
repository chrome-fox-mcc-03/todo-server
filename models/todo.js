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
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE
  }, {
    sequelize
    
  });
  ToDo.associate = function(models) {
    // associations can be defined here
  };
  return ToDo;
};