const net = require('net');
var lineNumber = 1;
const server = net.createServer(socket => {
    socket.on('data', data =>{
        socket.write(lineNumber + ': ' + data);
        lineNumber++;
    });
});
server.listen(8888);