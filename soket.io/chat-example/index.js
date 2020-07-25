let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', function (req, res) {
    // res.send('<h1>Hello Delta</h1>');
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.broadcast.emit('hi');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    })
});

http.listen(3000, function () {
    console.log('listening on *: 3000');
});