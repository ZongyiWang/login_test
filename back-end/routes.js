var express = require('express');
var router = express.Router();
var redis = require('redis');
var config = require('./config');
var client = redis.createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

function loggedIn(req, res, next) {
  if (req.user) {
    console.log("Im in loggedIn and i find it");
    next();
  } else {
    console.log("Im in loggedIn and i DO NOT find it");
    res.end();
  }
}

// router.get('/', (req,res) => {
//   res.render('landing') 
// });

// router.get('/home', loggedIn, function(req, res) {

//   var loggedIn = {};
//   config.authProviders.forEach((provider) => {
//     loggedIn[provider] = false; 
//   });

//   client.hkeys(req.sessionID, (err, keys) => {
//     keys.forEach((provider) => {
//       console.log('KEY: ', provider);
//       loggedIn[provider] = true; 
//     });
//     res.render('home', { user: req.user, authProviders:loggedIn});
//   });

// });

router.get('/checkstatus', function(req, res) {

  var loggedIn = {};
  config.authProviders.forEach((provider) => {
    loggedIn[provider] = false; 
  });

  client.hkeys(req.sessionID, (err, keys) => {
    keys.forEach((provider) => {
      console.log('KEY: ', provider);
      loggedIn[provider] = true; 
    });
    var status = { user: req.user, authProviders:loggedIn};
    res.send(status);
  });

});

router.get('/isloggedIn', loggedIn, function(req, res){
    var problem = {status: 'OK', username: req.user.username};
    console.log("Im in get");
    console.log(user.username);
    res.send(problem);
});


// router.get('/register', function(req,res){
//   res.render('register');
// });

// router.get('/login', function(req,res){
//   res.render('login');
// });

module.exports = router;
