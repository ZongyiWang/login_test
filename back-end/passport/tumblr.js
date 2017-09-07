var express = require('express');
var passport = require('passport');
var Strategy = require('passport-tumblr').Strategy;
var router = express.Router();
var config = require('../config.js');
var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

passport.use(new Strategy({
    consumerKey: config.tumblr.consumer_key,
    consumerSecret: config.tumblr.consumer_secret,
    callbackURL: 'http://localhost:3000/login/tumblr/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    profile.refreshToken = refreshToken;
    profile.accessToken = accessToken;
    return cb(null,profile);
  }));

router.get('/login/tumblr', passport.authorize('tumblr'));
router.get('/login/tumblr/return', passport.authorize('tumblr', { failureRedirect: '/home' }),
  function(req, res) {
    client.hset(req.sessionID, 'tumblr', req.account.accessToken, redis.print);
    res.send('<script>window.close()</script>');
  }
);
module.exports = router;
