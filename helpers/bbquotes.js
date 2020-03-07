const axios = require('axios')

function quotesGenerate(){
    let quote = ''
    return axios.get(`https://breaking-bad-quotes.herokuapp.com/v1/quotes`)
}


module.exports = {
    quotesGenerate
}
