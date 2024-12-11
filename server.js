var express = require('express')
const { createServer } = require('node:http');
// const { join } = require('node:path');
const { Server } = require('socket.io');

var app = express();
app.use(express.static(__dirname+"/public"))
const server = createServer(app);
const io = new Server(server);



app.get('/',(req,res)=>{
    res.sendFile(__dirname+"index.html")
})

// app.get('/hi',(req,res)=>{
//     res.sendFile(__dirname+'index.html')
// })
var Ind=0;
var Aus=0;
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('Ind',()=>{
        Ind++
        socket.broadcast.emit('score',{Ind,Aus})
    })
    socket.on('Aus',()=>{
        Aus++
        socket.broadcast.emit('score',{Ind,Aus})
    })
    socket.on('res',()=>{
        Ind=0
        Aus=0
        socket.broadcast.emit('scor',{Ind,Aus})
    })
  });

server.listen(4600,()=>{
    console.log("server is running on port 4600")
})