const mysql = require('mysql2');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.mysql_host,
  user: process.env.mysql_user,
  password: process.env.mysql_password,
  database: process.env.mysql_database,
  port: process.env.mysql_port
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

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
  const { emailaddress, password } = req.body;

  const query = "SELECT * FROM users WHERE emailaddress = ? AND password = ?";
  connection.query(query, [emailaddress, password], (err, result) => {
    if (err) {
      console.error("Error while authenticating user:", err);
      res.status(500).json({ status: "error", message: "Internal Server Error" });
    } else {
      if (result.length > 0) {
        console.log("User authenticated successfully");
        res.status(200).json({ status: "success", message: "User authenticated successfully" });
      } else {
        console.log("Invalid email address or password");
        res.status(401).json({ status: "error", message: "Invalid email address or password" });
      }
    }
  });
});      


app.post("/register", function (req, res) {
  const {
    firstname,
    lastname,
    contact,
    address,
    emailaddress,
    password,
  } = req.body;

  const query = "INSERT INTO users (firstname, lastname, contact, address, emailaddress, password, date) VALUES (?, ?, ?, ?, ?, ?, NOW())";

  connection.query(query, [firstname, lastname, contact, address, emailaddress, password], (err, result) => {
    if (err) {
      console.error("Error while registering user:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("User registered successfully");
      res.status(200).send("OK");
    }
  });
});

const server = app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
