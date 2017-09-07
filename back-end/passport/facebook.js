var express = require('express');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var router = express.Router();
var config = require('../config.js');
var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

passport.use(new Strategy({
    clientID: config.facebook.client_id,
    clientSecret: config.facebook.client_secret,
    callbackURL: 'http://localhost:3000/login/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    profile.refreshToken = refreshToken;
    profile.accessToken = accessToken;
    return cb(null,profile);
  }));

router.get('/login/facebook', passport.authorize('facebook'));
router.get('/login/facebook/return', passport.authorize('facebook', { failureRedirect: '/home' }),
  function(req, res) {
    client.hset(req.sessionID, 'facebook', req.account.accessToken, redis.print);
    res.send('<script>window.close()</script>');
  }
);
module.exports = router;
