const jwt = require('jsonwebtoken')

function token(payload) {
  let token = jwt.sign(payload, process.env.SECRET)
  return token
}

function verify(token) {
  return jwt.verify(token, process.env.SECRET)
}

module.exports = {token,
verify
}