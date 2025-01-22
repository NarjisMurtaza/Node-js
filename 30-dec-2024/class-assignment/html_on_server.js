import http from "http";


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write('{"name":"John", "age":30, "car":null}');
  res.end();
}).listen(8080);