var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.render('index.html');
});

var server = app.listen(7000, function () {
  var port = server.address().port;
  console.log("Example app listening at " + port + " port");
});
