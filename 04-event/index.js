import { EventEmitter } from 'node:events';

class Timer extends EventEmitter {
  constructor(interval) {
    super();
    this.interval = interval;
    this.timer = null;
  }

  start() {
    let count = 1;

    this.timer = setInterval(() => {
      this.emit('tick', count);
      count++;
    }, this.interval);
  }
}

const timer = new Timer(1000);

timer.on('tick', count => {
  console.log(`tick - ${count}`);
});

// timer.start();

class Chat extends EventEmitter {
  sendMessage(username, message) {
    this.emit('message', { username, message });
  }
}

const chat = new Chat();

function receiveMessage(message) {
  console.log(`${message.username}: ${message.message}`);
}

chat.on('message', receiveMessage);

chat.sendMessage('Viktor', 'Hello node');
chat.sendMessage('Max', 'Hello npm');
chat.sendMessage('Viktor', 'Hello nodemon');
