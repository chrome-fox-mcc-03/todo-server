"use strict"
const jwt = require('jsonwebtoken')

function generateToken(userData){
    return jwt.sign(userData, process.env.SECRET_KEY)
}

module.exports = { generateToken }