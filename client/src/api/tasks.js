const API_URL = 'http://localhost:3040/';
import request from './request';

function all(callback) {
  request.get(API_URL, callback);
}

function create(data, callback) {
  request.post(API_URL, callback, data);
}

function update(id, data, callback) {
  request.put(API_URL + id, callback, data);
}

function destroy(id, callback) {
  request.destroy(API_URL + id, callback);
}

export { all, create, update, destroy }
