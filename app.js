const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const io        = require('socket.io')(server);

const LISTEN_PORT = 8080;

// middleware to serve static files
app.use(express.static(__dirname + '/public;'));

//create our routes
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/2d', function(req,res) {
    res.sendFile(__dirname + '/public/2d.html');
});

app.get('/3d', function(req,res) {
    res.sendFile(__dirname + '/public/3d.html');
});

//websocket stuff
io.on('connection', (socket) => {
    console.log(socket.id + " is connected");

    socket.on('disconnect', () =>{
        console.log(socket.id + " is disconnected");
    })

    // custom events
    socket.on('red', (data) => {
        console.log("poop recieved! Wow!");
        io.emit('color_change', {r:255, g:0, b:0}); // send an event to al clients (see cheet sheet online)
    });

    socket.on('blue', (data) => {
        console.log("Blue event recieved! Wow!");
        io.emit('color_change', {r:0, g:0, b:255}); // send an event to al clients (see cheet sheet online)
    });
});

//start our server
server.listen(LISTEN_PORT);
console.log("Server started on port " + LISTEN_PORT);