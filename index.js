var express = require('express');
var bodyParser = require('body-parser');
var logger = require('express-logger');
var app = express();


app.use(bodyParser.json());

//API endpoints

app.get('/api/books', function(req, res) {
  res.end("books get");
});

app.post('/api/books', function(req, res) {
  res.end("books post");
});









//Error handling
app.use(function(req, res, next){
    res.status(404);
    console.log('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    console.log('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});

app.get('/ErrorExample', function(req, res, next){
    next(new Error('Random error!'));
});


//Server listening
var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Server running on 8000...");
});
