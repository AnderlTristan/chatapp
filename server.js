// Core dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const assert = require('assert');

// Creating an instance of express
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Creating a local server
server.listen(4000);

// Getting static assets
app.use(express.static(__dirname + '/src'));

// Creating the html root
app.get('/', function(req, res){
    res.sendFile(__dirname + '/src/index.html');
});

// Test emitting
io.on('connection', function(socket){
    socket.emit('news', { hello: 'world'});
    socket.on('my other event', function(data){
        console.log(data);
    });
});