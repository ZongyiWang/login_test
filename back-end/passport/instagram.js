var express = require('express');
var passport = require('passport');
var Strategy = require('passport-instagram').Strategy;
var router = express.Router();
var config = require('../config.js');
var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

passport.use(new Strategy({
    clientID: config.instagram.client_id,
    clientSecret: config.instagram.client_secret,
    callbackURL: 'http://localhost:3000/login/instagram/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    profile.refreshToken = refreshToken;
    profile.accessToken = accessToken;
    return cb(null,profile);
  }));

router.get('/login/instagram', passport.authorize('instagram'));
router.get('/login/instagram/return', passport.authorize('instagram', { failureRedirect: '/home' }),
  function(req, res) {
    client.hset(req.sessionID, 'instagram', req.account.accessToken, redis.print);
    res.send('<script>window.close()</script>');
  }
);
module.exports = router;
