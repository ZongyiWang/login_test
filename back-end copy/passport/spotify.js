var express = require('express');
var passport = require('passport');
var Strategy = require('passport-spotify').Strategy;
var router = express.Router();
var config = require('../config.js');
var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

passport.use(new Strategy({
    clientID: config.spotify.client_id,
    clientSecret: config.spotify.client_secret,
    callbackURL: 'http://localhost:3000/login/spotify/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    profile.refreshToken = refreshToken;
    profile.accessToken = accessToken;
    return cb(null,profile);
  }));

router.get('/login/spotify', passport.authorize('spotify'));
router.get('/login/spotify/return', passport.authorize('spotify', { failureRedirect: '/home' }),
  function(req, res) {
    client.hset(req.sessionID, 'spotify', req.account.accessToken, redis.print);
    res.redirect('/home'); 
  }
);
module.exports = router;
