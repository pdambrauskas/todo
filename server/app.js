var express = require('express');
var bodyParser = require('body-parser');
var tasks = require('./routes/tasks');
var mongoose = require('mongoose');
var crosssomain = require('./middleware/crossdomain');

mongoose.connect('mongodb://localhost/todo')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(crosssomain);

app.use('/', tasks);

app.use(function(request, response, next) {
  var error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = app;
