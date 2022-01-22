// define constructor function that gets `io` send to it
const logger = require('./logger')

module.exports = function (io) {

  const loggerInstance = new logger(5000);

  io.on('connection', (socket, userName) => {
    const logMessage = genMessage('Admin', 'Welcome');
    loggerInstance.addUser();
    socket.emit('messageFromServer', logMessage);
    socket.broadcast.emit('messageFromServer', genMessage('Admin', 'New user joined'));

    socket.on('send', (userName, msg) => {
      const logMessage = genMessage(userName, msg)
      loggerInstance.newMessage(logMessage);
      io.emit('messageFromServer', logMessage)
    })

    socket.on('disconnect', () => {
      loggerInstance.removeUser()
      io.emit('messageFromServer', genMessage('Admin', `A user left the chat`))
    });
  });

  const genMessage = (userName, msg) => {
    const newMessage = `${new Date().toTimeString().split(' ')[0]} : ${userName} : ${msg}`;
    return newMessage;
  }




};

