var passport = require('passport');
var express = require('express');
var router = express.Router();
var mongoose = require('../modulos/conexion')// para establecer conexion con mongodb
var Account = require('../modulos/account');

router.get('/',function(req, res) {
    res.render('index', { title: 'DHANA', user : req.user });
});

/*router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});**/

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('../transaccion');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;

