var axios = require('axios');

var request = function(url, callback, options = {}) {
  options['headers'] = { 'Content-Type': 'application/x-www-form-urlencoded' }

  axios(url, options)
    .then(function(response) {
      callback(false, response.data);
    })
    .catch(function(error) {
      console.log(error)
      callback(true, error.data);
    });
};

module.exports = {
  get: function(url, callback) {
    request(url, callback);
  },

  post: function(url, callback, data) {
    request(url, callback, { method: 'POST', data: data });
  },

  put: function(url, callback, data) {
    request(url, callback, { method: 'PUT', data: data });
  },

  delete: function(url, callback) {
    request(url, callback, { method: 'DELETE' });
  },
}
