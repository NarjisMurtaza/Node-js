var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
app.use(cookieParser())
const user = "narjis";

app.get('/', function (req, res) {
  // Cookies that have not been signed
  res.cookie("user",user);
  console.log('Cookies: ', req.cookies)
})

app.listen(8080)