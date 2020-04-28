const axios = require('axios')

module.exports = (req, res, next) => {
    axios({
        method: 'get',
        url: 'https://pixabay.com/api/',
        params: {
            key: '15515207-c65520f3e7922d78b69cada53',
            // q: 'nature',
            image_type: 'photo'
        }
    })
        .then(({data}) => {
            let firstData = data.hits[4]
            let image = {
                url: firstData.largeImageURL
            }
            res.status(200).json(image)
        })
        .catch(next)
}