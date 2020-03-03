module.exports = function(err, req, res, next) {
  // if (err.name == "SequelizeValidationError") {
  //   res.status(400).json(err.errors.map(el => el.message))
  // } else {
  //   res.status(500).json({ message: "Internal Server Error"})
  // }

  switch (err.name) {
    case "SequelizeValidationError":
      let error = err.errors.map(el => el.message)
      res.status(400).json(error)
      break;

    case "DATA NULL":
      res.status(404).json(err.message)
      break;

    case "PW ERROR":
      res.status(401).json(err.message)
      break
    
    default:
      res.status(500).json(err)
      break;
  }
}