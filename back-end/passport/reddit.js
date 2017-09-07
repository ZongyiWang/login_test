var express = require('express');
var passport = require('passport');
var Strategy = require('passport-reddit').Strategy;
var router = express.Router();
var config = require('../config.js');
var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

passport.use(new Strategy({
    clientID: config.reddit.client_id,
    clientSecret: config.reddit.client_secret,
    callbackURL: 'http://localhost:3000/login/reddit/return',
    state: 'foo'
  },
  function(accessToken, refreshToken, profile, cb) {
    profile.accessToken = accessToken;
    profile.refreshToken = refreshToken;
    return cb(null, profile);
  }));

router.get('/login/reddit', passport.authorize('reddit'));
router.get('/login/reddit/return', passport.authorize('reddit', { failureRedirect: '/home' }),
  function(req, res) {
    client.hset(req.sessionID, 'reddit', req.account.accessToken, redis.print);
    res.send('<script>window.close()</script>');
  }
);
module.exports = router;
