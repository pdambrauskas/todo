var MIN_TITLE_LENGTH = 4;
var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: MIN_TITLE_LENGTH },
  description: String,
  completed: Boolean,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
