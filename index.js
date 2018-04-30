const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const http = require("http");
const router = require('./router');

const app = express();

// DB Setup
mongoose.connect('mongodb://localhost/boilerplate_db')
  .then(() => console.log('MongoDB Connected.....'))
  .catch(err => console.log(err));

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT, function(){
  console.log("Server running on localhost:5000......")
});
