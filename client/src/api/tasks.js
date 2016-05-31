var API_URL = 'http://localhost:3040/';
var request = require('./request');

module.exports = {
  all: function(callback) {
    request.get(API_URL, callback);
  },

  create: function(data, callback) {
    request.post(API_URL, callback, data);
  },

  update: function(id, data, callback) {
    request.put(API_URL + id, callback, data);
  },

  destroy: function(id, callback) {
    request.delete(API_URL + id, callback);
  }
}
