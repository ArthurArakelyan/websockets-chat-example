import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import { Server } from 'socket.io';

const app = express();

app.use(cors());

app.use(bodyParser.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.get('/', (req, res) => {
  res.send('<h1>Chat Server</h1>');
});

io.on('connection', (socket) => {
  socket.on('chat', (message) => {
    socket.broadcast.emit('chat', message);
  });

  socket.on('disconnect', () => {
    socket.removeAllListeners();
  });
});

server.listen(5000, () => {
  console.log('listening on *:5000');
});
