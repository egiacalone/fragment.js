import express from 'express';
var connection = require('./app/config/connection');
var routes = require('./app/controllers/routes');
var routes = require('./app/controllers/models');

const fs = require('fs');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const PORT = 3000;
server.listen(PORT);
console.log('Server is running');


// connection.init();
// routes.configure(app);

var obj

var string = JSON.stringify(obj);

const users = [];
const connections = [];

io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log(' %s sockets is connected', connections.length);
    fs.readFile('mynewfile.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //now it an object
            console.log(data);
        }
    });
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            for (var i = 0, l = obj[key].length; i < l; i++) {
                var message = JSON.stringify(obj[key][i]);
                io.sockets.emit('new message', { message: message });
                // ...
            }
        }
    }

    socket.on('disconnect', () => {
        connections.splice(connections.indexOf(socket), 1);
    });

    socket.on('sending message', (message) => {
        fs.readFile('mynewfile.json', 'utf8', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                data = JSON.parse(data); //now it an object
                data.table.push({ id: 2, square: 3 }); //add some data
                data = JSON.stringify(data); //convert it back to json
                fs.writeFile('mynewfile.json', data, 'utf8'); // write it back
                console.log(data);
            }
        });
        console.log('Message is received :', message);
        io.sockets.emit('new message', { message: message });
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// fs.writeFile('mynewfile.json', string, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.readFile('mynewfile.json', 'utf8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         data = JSON.parse(data); //now it an object
//         data.table.push({ id: 2, square: 3 }); //add some data
//         data = JSON.stringify(data); //convert it back to json
//         fs.writeFile('myjsonfile.json', data, 'utf8'); // write it back
//         console.log(data);
//     }
// });
