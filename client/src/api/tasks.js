var jQuery = require('jquery');
var API_URL = 'http://localhost:3040/';
var DATA_TYPE = 'json';

module.exports = {
  all: function(callback) {
    jQuery.ajax({
      url: API_URL,
      dataType: DATA_TYPE,
      success: function(data) {
        callback(null, data);
      },
      error: function(xhr, status, error) {
        callback(error, null);
      }
    });
  },

  create: function(data, callback) {
    jQuery.ajax({
      url: API_URL,
      method: 'post',
      data: data,
      dataType: DATA_TYPE,
      success: function(data) {
        callback(null, data);
      },
      error: function(xhr, status, error) {
        callback(error, jQuery.parseJSON(xhr.responseText));
      }
    });
  },

  update: function(id, data, callback) {
    jQuery.ajax({
      url: API_URL + id,
      method: 'put',
      data: data,
      dataType: DATA_TYPE,
      success: function(data) {
        callback(null, data);
      },
      error: function(xhr, status, error) {
        callback(error, jQuery.parseJSON(xhr.responseText));
      }
    });
  },

  destroy: function(id, callback) {
    jQuery.ajax({
      url: API_URL + id,
      method: 'delete',
      success: function(data) {
        callback(null, data);
      },
      error: function(xhr, status, error) {
        callback(error, null);
      }
    });
  }
}
