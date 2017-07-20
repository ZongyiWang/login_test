var express = require('express');
var passport = require('passport');
var Strategy = require('passport-flickr').Strategy;
var router = express.Router();
var config = require('../config.js');
var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

passport.use(new Strategy({
    consumerKey: config.flickr.consumer_key,
    consumerSecret: config.flickr.consumer_secret,
    callbackURL: 'http://localhost:3000/login/flickr/return'
  },
  function(token, tokenSecret, profile, cb) {
    profile.token = token;
    profile.tokenSecret = tokenSecret;
    return cb(null,profile);
  }));

router.get('/login/flickr', passport.authorize('flickr'));
router.get('/login/flickr/return', passport.authorize('flickr', { failureRedirect: '/home' }),
  function(req, res) {
    client.hset(req.sessionID, 'flickr', req.account.token, redis.print);
    res.redirect('/home'); 
  }
);
module.exports = router;
