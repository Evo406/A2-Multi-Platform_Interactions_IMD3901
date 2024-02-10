const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);

const LISTEN_PORT = 8080;

// middleware to serve static files
app.use(express.static(__dirname + '/public;'));

//create our routes
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/space', function(req,res) {
    res.sendFile(__dirname + '/public/space.html');
});


//start our server
server.listen(LISTEN_PORT);
console.log("Server started on port " + LISTEN_PORT);