'use strict';
module.exports = (sequelize, DataTypes) => {
  class Project extends sequelize.Sequelize.Model {
    static associate ( models ) {
      
    }
  }

  Project.init({
    UserId: {
      type : DataTypes.INTEGER
    },
    ProjectTeamId: {
      type : DataTypes.INTEGER
    }
  },{sequelize})

  return Project
};