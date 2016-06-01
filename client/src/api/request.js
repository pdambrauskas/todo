import axios from 'axios';

function request(url, callback, options = {}) {
  options['headers'] = { 'Content-Type': 'application/x-www-form-urlencoded' }

  axios(url, options)
    .then(function(response) {
      callback(false, response.data);
    })
    .catch(function(error) {
      callback(true, error.data);
    });
}

function get(url, callback) {
  request(url, callback);
}

function post(url, callback, data) {
  request(url, callback, { method: 'POST', data: data });
}

function put(url, callback, data) {
  request(url, callback, { method: 'PUT', data: data });
}

function destroy(url, callback) {
  request(url, callback, { method: 'DELETE' });
}

export default { get, post, destroy, put };
