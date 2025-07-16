const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000;
const connectDb = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');


const route = require('./routes/routes');
// DB connection
connectDb();


// Middleware

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// route Use

app.use(route);


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
