var PORT = process.env.PORT || 3000
const express=require('express')
const path = require('path');
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket)=>{
    socket.on('chat', (msg)=>{
        io.emit('chat', msg)
    })
})
app.get('/', (req, res)=>{
    const rutaIndex = path.join(__dirname, 'cliente', 'index.html');
  
    res.sendFile(rutaIndex)
})

server.listen(PORT, ()=> {
    console.log('Servidor corriendo en http://localhost:3000')
})