if(process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}
const PORT = process.env.PORT;
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/error-handler');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
