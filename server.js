// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 3000;

app.listen(port, listening);

function listening() {
  console.log("Server is running");
  console.log(`Server is running on localhost: ${port}`);
}

//Creating a get-route that uses the url '/all'
//and returns the JavaScript Object projectData (defined at the top of the server.js file)
app.get("/getData", sendData);
function sendData(req, res) {
  res.send(projectData);
}

//creating a simple POST-route with an endpoint to store the sent data
app.post("/postData", addData);
function addData(req, res) {
  console.log(req.body);
  projectData.today = req.body.date;
  projectData.feeling = req.body.feel;
  projectData.temperature = req.body.temp;
  res.send({
    msg: "Message received!"
  });
}
