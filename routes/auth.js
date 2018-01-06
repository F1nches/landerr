var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');

//Schema models
var Account = require('../models/userModel.js');

var router = express.Router();

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

module.exports = router;
