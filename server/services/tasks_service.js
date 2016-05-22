var task = require('../models/task.js');

module.exports = {
  all: function(callback) {
    task.find(callback);
  },

  find: function(id, callback) {
    task.findById(id, callback);
  },

  create: function(attributes, callback) {
    task.create(attributes, callback);
  },

  update: function(id, attributes, callback) {
    task.findByIdAndUpdate(id, attributes, callback);
  },

  destroy: function(id, callback) {
    task.findByIdAndRemove(id, callback);
  }
}
