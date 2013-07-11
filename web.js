var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

buf =new Buffer(256);
fs.readFileSync('$HOME/bitstarter/index.html',function(err,data){
if(err) throw err;

buf.write(data,"utf-8");

});
 
app.get('/', function(request, response) {
  response.send(buf.toString('utf-8',0,12));
});

var port = process.env.PORT || 5000;
app.listen(port, fuction() {
  console.log("Listening on " + port);
});
