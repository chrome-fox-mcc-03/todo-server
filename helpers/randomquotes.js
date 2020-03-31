const axios = require("axios");

function getQuotes() {
    axios({
        "method":"GET",
        "url":"https://andruxnet-random-famous-quotes.p.rapidapi.com/",
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"andruxnet-random-famous-quotes.p.rapidapi.com",
            "x-rapidapi-key":"a252b90072msh0a7f67cc6ed612dp14262bjsn2a71656f29fd"
            },
        "params":{
            "cat":"famous",
            "count":"1"
            }
    })

    .then((response) => {
        console.log(response.data)
        return response.data
    })
    
    .catch((error) => {
        console.log(error)
    })
}
module.exports = getQuotes;