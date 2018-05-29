var express = require('express');
var enforce = require('express-sslify');
var app = express();
var port = process.env.PORT || 8080;

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
app.use(enforce.HTTPS({ trustProtoHeader: true }))

/* serves main page */
app.get("/", function(req, res) {
    res.sendfile('index.html')
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res) {
    res.sendfile(__dirname + req.params[0]);
});

app.listen(port, function() {
    console.log("Listening on " + port);
});

