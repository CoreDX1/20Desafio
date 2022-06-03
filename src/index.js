import { Server } from 'socket.io';
import http from 'http';
import app from './app';
import connectDB from './container/mongodb';
import sockets from './sockets';

connectDB();

const server = http.createServer(app);

const httpServer = server.listen(8080);
console.log('Server on');

const io = new Server(httpServer);
sockets(io);
