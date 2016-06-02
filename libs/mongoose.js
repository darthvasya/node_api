var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function(err) {
  console.error("Connection error: ", err.message);
});
db.once('open', function callback() {
  console.log("Connected to DB");
});

var Schema = mongoose.Schema;

//Schemas
var Images = new Shema({
  kind: {
    type: String,
    enum: ['thumbnail', 'detail'],
    required: true
  },
  url: { type: String, required: true}
});

var Article = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  images: [Images],
  modified: { type: Date, default: Date.now }
});
