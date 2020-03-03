const { verifyToken } = require("../helpers/jwt");

function authenticator(req, res, next) {
  try {
    const token = req.headers.token;
    req.decoded = verifyToken(token);
    next();
  } catch (err) {
    next({
      status : 401,
      msg : "unauthorized, please log in first"
    });
  }
}

module.exports = authenticator;
