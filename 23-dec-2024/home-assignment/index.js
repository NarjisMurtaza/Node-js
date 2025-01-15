import EventEmitter from 'events';
const eventEmitter = new EventEmitter();
eventEmitter.on('start', (name,age) => {
    console.log(`${name} ${age}`);
  });
  eventEmitter.emit('start', "ali", 5);