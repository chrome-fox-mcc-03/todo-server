module.exports = (err, req, res, next) => {
  let status = 500
  let message = 'Internal Server Error'
  
  if (err.name === 'SequelizeUniqueConstraintError') {
    status = 400
    message = 'Email already in use'
  } else if (err.name === 'SequelizeValidationError') {
    const errors = err.errors.map(el => el.message)
    status = 400
    message = errors[0]
  } else if (err.status) {
    status = err.status
    message = err.message
  }

  res.status(status).json({
    message
  })
}