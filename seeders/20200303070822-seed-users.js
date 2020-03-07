"use strict";

const { hashPassword } = require("../helpers/bcrypt");
const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./data/users.json", "utf8"));
data = data.map(el => {
  el.password = hashPassword(el.password);
  el.createdAt = new Date();
  el.updatedAt = new Date();
  return el;
});

console.log(data);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", data);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null);
  }
};
