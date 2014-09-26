var express = require('express');
var app = express();

var PORT = 3001;

app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/_sockjs'));

app.get('/', function (req, res) {
  res.render('index.jade', { title: 'Hey', message: 'Hello there!'});
})

var server = app.listen(PORT, function() {
    console.log('Listening on port %d', server.address().port);
});