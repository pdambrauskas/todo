var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
