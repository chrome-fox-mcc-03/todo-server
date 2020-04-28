const axios = require('axios')

module.exports = (req, res, next) => {
    axios({
        method: 'get',
        url: 'https://quote-garden.herokuapp.com/quotes/random'
    })
        .then(({data}) => {
            const { quoteText, quoteAuthor } = data
            res.status(200).json({
                quoteText,
                quoteAuthor
            })
        })
        .catch(next)
}