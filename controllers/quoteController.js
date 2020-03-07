const axios = require('axios');

class QuoteController {
	static getQuote (req, res, next) {
		axios({
			method: 'GET',
			url:"https://150000-quotes.p.rapidapi.com/random",
			headers: {
				"x-rapidapi-host":"150000-quotes.p.rapidapi.com",
				"x-rapidapi-key":"4a003621a5msh52f32a49632069bp1c8464jsn6d981b16e394"
			}
		})
			.then(response => {
				response = response.data;
				res.status(200).json({
					quote: response.message,
					author: response.author
				});
			})
			.catch(err => {
				next({
					status: 500
				})
			})
	}
}

module.exports = QuoteController;