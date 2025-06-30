const {Server} = require('socket.io');

const io = new Server(8000, {
    cors: true,
})

io.on('connection', socket => {
    socket.on('room:join', ({email, room}) => {
        console.log(`User with email ${email} joined room ${room}`);
    });
    console.log('Socket connected', socket.id);
})