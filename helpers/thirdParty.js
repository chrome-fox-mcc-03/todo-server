'use strict'

const axios = require("axios")
const restdb = axios.create({
    baseURL: 'https://todoserver-61c9.restdb.io/',
    headers: {
        "x-api-key": '3cdf839513528d0f2e2c7b9812488874b05c9'
    }
})

module.exports = restdb