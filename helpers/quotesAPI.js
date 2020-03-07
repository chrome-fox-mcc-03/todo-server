const axios = require('axios');
const apiUrl = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"

const quotesApi = axios.create({
    baseURL: apiUrl
});

function getQuotes() {
    return quotesApi.get();
}

module.exports = getQuotes;
