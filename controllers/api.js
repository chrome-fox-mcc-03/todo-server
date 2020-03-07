const axios = require('axios')

module.exports = {
  weatherApi(req, res, next) {
    const { city } = req.query

    axios({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},IDN&appid=eda3a916b9b11b33f7531c37353644e9`
    })
      .then(({ data }) => {
        res.status(200).json({
          data: data.weather
        })
      })
      .catch(next)
  }
}