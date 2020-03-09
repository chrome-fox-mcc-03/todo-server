const axios = require('axios')
const themoviedb = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
class MovieController {
    static getMovies(req, res, next) {
        themoviedb.get('/movie/popular?api_key=33e4b7d80b7517a920e912774111d9db&language=en-US&page=1')
            .then(response => {
                res.status(200).json({ data: response.data.results })
            }).catch(err => {
                next(err)
            })
    }
}

module.exports = MovieController