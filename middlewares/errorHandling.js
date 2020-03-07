function errorHandler(err, req, res, next) {
  // handle sequelize validation error
  if (err.name === "SequelizeValidationError") {
    let errMessage = err.errors.map(el => el.message);
    res.status(400).json({
      error: {
        status: 400,
        msg: errMessage
      }
    });
  } else if (err.name === "SequelizeUniqueConstraintError") {
    res.status(400).json({
      error: {
        status: 400,
        msg: err.errors[0].message
      }
    });
  } else {
    res.status(err.status || 500).json({
      error: {
        status: err.status || 500,
        msg: err.msg || "Internal Server Error"
      }
    });
  }
}

module.exports = errorHandler;
