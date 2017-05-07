/**
 * Created by danstan on 5/7/17.
 */
var express = require('express');

var app = express();

var mongoose = require('mongoose');

var setupupController = require ('./controllers/setupController');

var config = require('./config');

var port = process.env.PORT || 8090;

app.use('/assets', express.static(__dirname + './public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getTDBConnectionSreing() );

setupupController(app)

app.listen(port);

console.log('Server started running on port ' + port);
