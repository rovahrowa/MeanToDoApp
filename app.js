/**
 * Created by danstan on 5/7/17.
 */
var port = process.env.PORT || 8090;

var config = require('./config');

//Create Express Server
var express = require('express');
var app = express();

//For initial Setup of Database and other things
var setupController = require ('./controllers/setupController');
//Todos API Controller
var todoController = require('./controllers/todoApiController');

//Views Locations and Module
app.use('/assets', express.static(__dirname + './public'));
app.set('view engine', 'ejs');


//Database Connection
var mongoose = require('mongoose');
mongoose.connect(config.getTDBConnectionSreing() );

//Controllers
setupController(app);
todoController(app);

//Routes
app.listen(port);

console.log('Server started running on port ' + port);
