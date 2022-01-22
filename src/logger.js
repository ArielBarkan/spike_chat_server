class Logger {

  activeUsers = 0;
  totalMessages = 0;

  constructor(interval = 10000) {
    setInterval(() => {
      const log = {
        activeUsers: this.activeUsers,
        totalMessages: this.totalMessages,
      }
      console.log(log);
    }, interval);
  }


  addUser() {
    console.log(`LOG > JOIN > ${new Date().toTimeString().split(' ')[0]}`)
    this.activeUsers++;
  };
  removeUser() {
    console.log(`LOG > LEAVE > ${new Date().toTimeString().split(' ')[0]}`)
    this.activeUsers--;
  };
  newMessage(msg) {
    console.log(`LOG > SEND > ${msg}`)
    this.totalMessages++;
  };


}

module.exports = Logger