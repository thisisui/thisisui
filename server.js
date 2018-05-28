var express = require('express');
var enforce = require('express-sslify');
var path = require('path');
var app = express();

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
app.use(enforce.HTTPS({ trustProtoHeader: true }))

// viewed at http://localhost:8080
app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8081);