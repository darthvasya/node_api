var express = require('express');
var bodyParser = require('body-parser');
var logger = require('express-logger');
var app = express();



var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Server running on 8000...");
});
