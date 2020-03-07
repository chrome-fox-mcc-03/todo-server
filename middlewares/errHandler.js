module.exports = 
  function errHandler (err, req, res, next) {
    let status = 500
    let errors = []
    
    console.log(err, "consolog errooorrrrrrrrrrrrrrrrrrrrr")
    if(err.name === 'SequelizeValidationError' || 
       err.name === 'SequelizeUniqueConstraintError') {
      status = 400
      errors = err.errors.map(error => error.message)
    } else if (err.name === 'JsonWebTokenError') {
      status = 401
      errors.push('Please login first')
    } else {
      status = err.status
      errors.push(err.message)
    }

    res.status(status).json({ errors })
  }