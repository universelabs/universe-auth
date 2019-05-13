const express = require('express');
const http = require("http");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');

const app = express();

// DB Setup
mongoose.connect("mongodb://localhost:27017/auth", { useNewUrlParser: true })
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
