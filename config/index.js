/**
 * Created by danstan on 5/7/17.
 */
var configValues = require('./config');

module.exports ={

    getTDBConnectionSreing: function () {
        return 'mongodb://localhost:27017/' + configValues.testDB;
    },
    getPDBConnectionSreing: function () {
        return 'mongodb://localhost:27017/' + configValues.tesPDB;
    }
}