const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";
const prodUser = process.env.DB_UUID;
const prodPW = process.env.DB_PW;
const prodServer = process.env.DB_URI;

const app = express();

// DB Setup
if (isProduction) {
  // production db
  mongoose
    .connect(
      "mongodb+srv://" +
        prodUser +
        ":" +
        prodPW +
        prodServer +
        "?retryWrites=true",
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB Prod Connected....."))
    .catch(err => console.log(err));
} else {
  mongoose
    .connect("mongodb://localhost:27017/auth", { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected....."))
    .catch(err => console.log(err));
}

// App Setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT, function() {
  console.log("Server running on localhost:5000......");
});
