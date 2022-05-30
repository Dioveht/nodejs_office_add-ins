var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('server.key', 'utf8');
var certificate = fs.readFileSync('server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// set folder static
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('worked')
});

httpServer.listen(1000, () => { console.log('http are running') });
httpsServer.listen(3000, () => { console.log('https are running') });