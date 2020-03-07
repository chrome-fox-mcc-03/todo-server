'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProject = sequelize.define('UserProject', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  UserProject.associate = function(models) {
    // associations can be defined here
  };
  return UserProject;
};