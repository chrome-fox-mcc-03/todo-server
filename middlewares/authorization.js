const { Todo } = require("../models");

function Authorizer(req, res, next) {
  let logInId = req.decoded.id;
  let targetId = req.params.id;
  Todo.findOne({
    where: {
      id: targetId
    }
  })
    .then(response => {
      if (response.UserId === logInId) {
        next();
      } else {
        next({
          status: 403,
          msg: "forbidden, you don't have permission to access other people's data"
        });
      }
    })
    .catch(err =>
      next({
        status: 404,
        msg: "error not found"
      })
    );
}

module.exports = Authorizer;
