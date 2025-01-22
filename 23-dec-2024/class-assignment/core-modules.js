var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write('{"name":"John", "age":30, "car":null}');
  res.end();
}).listen(8080);

const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
eventEmitter.on('start', (name,age) => {
    console.log(`${name} ${age}`);
  });
  eventEmitter.emit('start', "ali", 5);