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


//         ------------- expose WHOLE project
app.use(express.static(path.join(__dirname, '../')));

// request from front end
// response to front end
app.get('/years', function(req, res) {
  console.log('server side clicked')
  // req.get('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ 2001 +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ 15 +'&page=1&output=json&callback=JSONP_CALLBACK')
  // return res.send('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ 2001 +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ 15 +'&page=1&output=json&callback=JSONP_CALLBACK')
  request('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ 2001 +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ 15 +'&page=1&output=json&callback=JSONP_CALLBACK', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the response
    res.send({body})
  }
})

})


// catch all route
app.get('*', function(req, res) {
    res.sendFile('index.html', { root: './'}); // load our public/index.html file
});

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// log port
console.log('listening on port ' + port);

// expose app
exports = module.exports = app;
