var passport = require('passport');
var express = require('express');
var router = express.Router();

/*router.get('/users#', function(req, res) {
    res.render('transaccion', {});
});*/

router.get('/',function(req, res, next) {
    if(req.user){
        next();
        res.render('users', { user : req.user });
    }else{
        res.redirect('/');
    }
});

module.exports = router;
