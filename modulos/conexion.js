/**
 * Created by Ridicc - PC on 23/11/2014.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sicont');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (e,d) {
    if(e) {
        console.log(e)
    }else{
        console.log("conetado a la base de datos: "+dName);
    }
});

/*db.once('open', function (callback) {

});*/
var dPort = 27017;
var dHost = "localhost";
var dName = "sicont";
module.exports = mongoose;




