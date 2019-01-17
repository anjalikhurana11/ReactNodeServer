//import dependencies
const express = require('express');
const cors = require('cors');
var jsonServer = require('json-server');
// define the Express app
const app = express();

//app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// enable all CORS requests
app.use(cors());

// retrieve all API's
app.use('/api', jsonServer.router('db.json'));


// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});