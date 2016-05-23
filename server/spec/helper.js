var mongoose = require('mongoose');

module.exports = {
  setupDB: function() {
    mongoose.connect('mongodb://localhost/testdb');
  },

  dropDB: function() {
    mongoose.connection.db.dropDatabase();
  }
}
