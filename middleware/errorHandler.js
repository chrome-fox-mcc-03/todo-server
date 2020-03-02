module.exports = (err, req, res, next) => {
  let status = 500
  let errObj = {
    message : 'Internal server error'
  }

  if (err.name === 'SequelizeValidationError') {
    status = 400
    let messageErrors = []
    err.errors.forEach(error => {
        messageErrors.push(error.message)
    })
    errObj = {
      message : 'BAD REQUEST',
      errors : messageErrors
    }
  } else if (err.name === "SequelizeUniqueConstraintError") {
    status = 400
    let messageErrors = []
    err.errors.forEach(error => {
      messageErrors.push(error.message)
    })
    errObj = {
      message : 'BAD REQUEST',
      errors : messageErrors
    } 
  } else if (err.name === 'Not Found') {
    status = 404,
    errObj = {
      message : err.name,
      errors : [err.name]
    }
  } else if (err.name === 'Invalid Token Errors') {
    status = 401
    errObj = {
      message : err.name,
      errors : [err.name]
    }
  } else if (err.name === 'Please login first') {
    status = 401
    errObj = {
      message : err.name,
      errors : [err.name]
    }
  }

  res.status(status).json(errObj)
}