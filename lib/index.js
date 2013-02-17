var express = require('express');

var crud = function(app, bokkusu) {
    app.use(express.bodyParser());
    app.get('/data/:id', function(req, res) {
        bokkusu.get(req.params.id, function(error, data) {
            if (data == null) {
                res.status(404).end();
            } else {
                var body = JSON.stringify(data);
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Content-Length', body.length);
                res.end(body);
            }
        });
    });
};

exports.crud = crud;
