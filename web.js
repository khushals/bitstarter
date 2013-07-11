var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    var fs = require('fs');
    var buf =new Buffer(fs.readFileSynch('index.html','utf-8'));
    response.send(buf.toString();
//fs.readFileSync('$HOME/bitstarter/index.html',function(err,data){
//if(err) throw err;
//buf.write(data,"utf-8");
//});
//response.send(buf.toString('utf-8',0,12));
});

var port = process.env.PORT || 5000;
app.listen(port, fuction() {
   console.log("Listening on " + port);
});
