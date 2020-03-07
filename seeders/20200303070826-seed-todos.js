"use strict";

const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./data/todos.json", "utf8"));
data = data.map(el => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
  return el;
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Todos", data);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Todos", null);
  }
};
