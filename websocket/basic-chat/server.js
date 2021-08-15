// npm install ws
// npm install node-uuid

var WebSocketServer = require('ws').Server,
    was = new WebSocketServer({port: 8181})

var uuid = require('node-uuid')

was.on('connection', function(socket) {
    console.log('client connected')
    socket.on('message', function(message) {
        console.log(message)
    })
})