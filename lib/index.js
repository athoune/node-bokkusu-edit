var crud = function(app, bokkusu) {
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
    app.delete('/data/:id', function(req, res) {
        bokkusu.delete(req.params.id, function(error, exist) {
            if (!exist) {
                res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
    app.put('/data/:id', function(req, res) {
        bokkusu.set(req.params.id, req.body, function(error) {
            res.status(200).end();
        });
    });
};

exports.crud = crud;
