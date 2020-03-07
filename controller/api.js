const axios = require('axios')

// module.exports = (req, res, next) => {
//   axios({
//     url: 'http://newsapi.org/v2/top-headlines?',
//     params: {
//       country: 'id',
//       apiKey: '00cb95c19e4c4525afe37e57b786ff99'
//     }
//   })
//     .then(result => {
//       console.log(result)
//       // res.status(200).json(result)
//     }).catch(err => {
//       console.log(err)
//     });
// }
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('00cb95c19e4c4525afe37e57b786ff99');
module.exports =(req, res, next) => {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'id'
  }).then(response => {
    res.status(200).json(response)
  }).catch(err => {
    console.log(err)
  })
}
