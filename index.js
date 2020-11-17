var express = require('express');
var app = express();
// for parsing the body in POST request
var bodyParser = require('body-parser');
require("dotenv").config({path:"./.env"});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/pass', function(req,res) {
console.log(req.query.swfurl)
if(req.query.swfurl.includes(process.env.PSK) && req.query.name === process.env.NAME) {
  console.log('Correct key!')
  console.log(`User in question is ${req.query.name}`)
  res.send('Stream key accepted');
  res.status(201).end();
} else {
  res.status(404).end();
}
});

app.get('/play', function(req,res) {
console.log("Someone is watching the stream, allowing them to watch it")
return 200;
});

app.listen(process.env.PORT, function(){
    console.log(`Server listening on port ${process.env.PORT}`);
});
