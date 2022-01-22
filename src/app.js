require('dotenv').config();

const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*"
  }
});

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Listening on port ${port} > http://localhost:${port}`);
})

require('./io')(io);


