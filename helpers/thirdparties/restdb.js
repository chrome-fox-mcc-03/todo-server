"use strict"
const axios = require('axios');

const restdb = axios.create({
    baseURL: 'https://fancytodo-6894.restdb.io',
    headers: {
        'Host': 'fancytodo-6894.restdb.io',
        'Content-Type':' application/json',
        'x-apikey': '99a48d49cb30d710b92c969bf2a4f5c8d0e4a',
        'Cache-Control': 'no-cache'
    }
})


function sendEmail(user){
    return restdb({
        user:user,
        method: 'post',
        url: '/mail',
        data: {
            "to": user.email,
            "subject":`Hello ${user.name}!`, 
            "html": `<h1>Hello ${user.name}!</h1> <p>Your account is ready to used!</p>`, 
            "company": "Prmzk inc.", 
            "sendername": "Fancy-todo Admin PRMZK"
        }
    })
}

module.exports = sendEmail