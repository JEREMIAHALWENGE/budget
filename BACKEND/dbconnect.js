const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'simauz1234',
  database: 'jerrybay',
  port: 3306 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Configure bodyParser for JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS policy for specific origins
const allowedOrigins = ["http://localhost:8080", "http://localhost:8081"];
app.use(function (req, res, next) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
     

app.get("/", function (req, res) {
  res.send("Welcome to budget");
});

app.post("/login", function (req, res) {
  console.log(req.body);
  res.send('ok');
});

app.post("/register", function (req, res) {
  console.log(req.body);
  res.send('ok');
});

const server = app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
