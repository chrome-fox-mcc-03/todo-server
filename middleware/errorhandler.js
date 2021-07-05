function errorHandler(err, req, res, next) {
  let status = 500;
  let errName = {
    message: 'Internal Server Error'
  }
  console.log(err);
  
  if(err.name === 'SequelizeValidationError') {
    status = 400;
    let arrMessage = []
    for(let i=0; i<err.errors.length ; i++) {
      arrMessage.push(err.errors[i].message)
    }
    errName = {
      message: 'Bad Request',
      errors: arrMessage
    }
  }
  else if(err.name === 'Todo not found') {
    status = 404;
    errName = {
      message: 'Todo not found',
      errors: [err.name]
    }
  }
  else if(err.name === 'email or password wrong') {
    status = 400;
    errName = {
      message: 'Bad Request',
      errors: [err.name]
    }
  }
  else if(err.name === 'Not authenticated') {
    status = 401;
    errName = {
      message: 'Not authenticated',
      errors: ['Please LogIn first ']
    }
  }
  res.status(status).json(errName)
}

module.exports = errorHandler