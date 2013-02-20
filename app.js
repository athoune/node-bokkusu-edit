var express = require('express'),
    edit = require('./lib/index.js'),
    store = require('bokkusu').jsonstore;

var app = express();

//app.use(express.directory('public'));
app.use(express.static('public'));
app.use(express.bodyParser());

var bokkusu = store('./demo/sample.json', function(error) {
    edit.crud(app, this);
    app.listen(3000);
    console.log('Listening on port 3000');

});
