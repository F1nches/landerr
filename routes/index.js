var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');

//Schema models
var Account = require('../models/userModel.js');

var router = express.Router();

// Sample user JSON
var user = require('../public/javascripts/user.json');

/* GET/POST register */
router.get('/register', function(req, res) {
    res.render('login', { });
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }
        console.log(account);
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

/* GET login page. */
router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

/* GET logout page. */
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

/* Test */
router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user:user});
});

/* GET add property page. */
router.get('/add-property', function(req, res, next) {
  res.render('add-property');
});

/* POST new property. */
router.post('/property', function(req, res, next) {
  console.log('property added: ' + req.body.name);
  res.redirect('/');
});

module.exports = router;
