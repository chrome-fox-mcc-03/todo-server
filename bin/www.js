const app = require('../app')
const port = process.env.PORT

app.listen(port, _ => {
  console.log('Listening on port', port)
})