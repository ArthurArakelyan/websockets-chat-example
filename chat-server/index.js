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
  res.send('<h1>Chat Server Example</h1>');
});

io.on('connection', (socket) => {
  socket.on('create chat', (id) => {
    socket.on(`chat:${id}`, (message) => {
      socket.broadcast.emit(`chat:${id}`, message);
    });
  });

  socket.on('disconnect', () => {
    socket.removeAllListeners();
  });
});

server.listen(5000, () => {
  console.log('listening on *:5000');
});
