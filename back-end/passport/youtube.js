var express = require('express');
var passport = require('passport');
var Strategy = require('passport-youtube-v3').Strategy;
var router = express.Router();
var config = require('../config.js');
var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

passport.use(new Strategy({
    clientID: config.youtube.client_id,
    clientSecret: config.youtube.client_secret,
    callbackURL: 'http://localhost:3000/login/youtube/return',
    scope: ['https://www.googleapis.com/auth/youtube.readonly']
  },
  function(accessToken, refreshToken, profile, cb) {
    profile.refreshToken = refreshToken;
    profile.accessToken = accessToken;
    return cb(null,profile);
  }));

router.get('/login/youtube', passport.authorize('youtube'));
router.get('/login/youtube/return', passport.authorize('youtube', { failureRedirect: '/home' }),
  function(req, res) {
    client.hset(req.sessionID, 'youtube', req.account.accessToken, redis.print);
    res.redirect('/home'); 
  }
);
module.exports = router;
