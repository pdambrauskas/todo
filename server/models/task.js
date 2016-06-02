var mongoose = require('mongoose');

var titleValidator = function(value) {
  return /([\w].*){4,}/.test(value);
};

var taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: {
      validator: titleValidator,
      message: 'At least 4 characters'
    }
  },
  description: String,
  completed: Boolean,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
