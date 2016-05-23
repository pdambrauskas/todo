var Task = require('../models/task.js');

module.exports = {
  all: function(callback) {
    Task.find(callback);
  },

  find: function(id, callback) {
    Task.findById(id, callback);
  },

  create: function(attributes, callback) {
    var task = new Task(attributes);
    task.save(callback);
  },

  update: function(id, attributes, callback) {
    var options = { runValidators: true };
    Task.findOneAndUpdate({ _id: id }, attributes, options, callback);
  },

  destroy: function(id, callback) {
    Task.findByIdAndRemove(id, callback);
  }
}
