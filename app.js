var express = require('express'),
    edit = require('./lib/index.js'),
    store = require('bokkusu').jsonstore;


var app = express();

app.use(express.directory('public'));
app.use(express.static('public'));

app.get('/hello.txt', function(req, res) {
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

var bokkusu = store('./demo/sample.json', function(error) {
    edit.crud(app, this);
    app.listen(3000);
    console.log('Listening on port 3000');

});