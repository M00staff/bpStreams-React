// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var path           = require('path');
// 3rd party library for handling HTTP requests
var request        = require('request');
// var bodyParser     = require('body-parser');

// configuration ===========================================

// link to database connection if ever need
// var db = require('./config/db');

// set port
var port = process.env.PORT || 8080;

// connect to database if ever need
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
// app.use(bodyParser.json());

// parse application/vnd.api+json as json
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// console.log( path.join(__dirname, '../' ));


// ------------- expose WHOLE project
app.use(express.static(path.join(__dirname, '../')));


// -------- ROUTES
// request from front end
// response to front end
// fix CORS issue
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/years', function(req, res) {
  request('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ req.query.year +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ req.query.row +'&page=1&output=json',
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body) // Show the response
        res.send(body)
      }
  })
})

app.get('/shows', function(req, res) {
  request('https://archive.org/metadata/' + req.query.show + '?output=json',
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body) // Show the response
        res.send(body)
      }
  })
})


// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// log port
console.log('listening on port ' + port);

// expose app
exports = module.exports = app;