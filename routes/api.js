const router = require('express').Router()
const Axios = require('axios')
const { authentication } = require('../middlewares/auth')

router.use(authentication) 

router.get('/weather', (req, res, next) => {
  Axios({
    url: 'https://www.metaweather.com/api/location/1047378/',
    method: 'GET',
  })
    .then(weather => {
      let tommorowWeather = weather.consolidated_weather[1]
      console.log(tommorowWeather)
      res.status(200).json({ tommorowWeather })
    })
    .catch(next)
})

module.exports = router