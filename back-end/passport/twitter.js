var express = require('express');
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
var router = express.Router();
var config = require('../config.js');
var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

passport.use(new Strategy({
    consumerKey: config.twitter.consumer_key,
    consumerSecret: config.twitter.consumer_secret,
    oob: 'http://127.0.0.1:3000/login/twitter/return'
  },
  function(accessToken, tokenSecret, profile, cb) {
    profile.tokenSecret = tokenSecret;
    profile.accessToken = accessToken;
    return cb(null,profile);
  }));

router.get('/login/twitter', passport.authorize('twitter'));
router.get('/login/twitter/return', passport.authorize('twitter', { failureRedirect: '/home' }),
  function(req, res) {
    client.hset(req.sessionID, 'twitter', req.account.accessToken, redis.print);
    // res.redirect('/home');
  }
);
module.exports = router;
