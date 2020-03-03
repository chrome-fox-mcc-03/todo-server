module.exports = 
  function errHandler (err, req, res, next) {
    let status = 500
    let errors = []
    
    console.log(err)
    if(err.name === 'SequelizeValidationError' || 
       err.name === 'SequelizeUniqueConstrainError') {
      status = 400
      errors = err.errors.map(error => error.message)
    } else {
      status = err.status
      errors.push(err.message)
    }

    res.status(status).json({ errors })
  }