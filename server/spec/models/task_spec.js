var Task = require('../../models/task.js');

afterEach(function() {
  Task.remove({}, function() {});
});

describe('validation', function() {
  describe('empty title', function() {
    var parameters = { title: '' };

    it('returns error', function(done) {
      new Task(parameters).save(function(error, data) {
        expect(error).not.toBe(null);
        done();
      });
    });
  });

  describe('short title', function() {
    var parameters = { title: 'a' };

    it('returns error', function(done) {
      new Task(parameters).save(function(error, data) {
        expect(error).not.toBe(null);
        done();
      });
    });
  });

  describe('title of spaces', function() {
    var parameters = { title: '           ' };

    it('returns error', function(done) {
      new Task(parameters).save(function(error, data) {
        expect(error).not.toBe(null);
        done();
      });
    });
  });

  describe('valid title', function() {
    var parameters = { title: 'long title' };

    it('returns error', function(done) {
      new Task(parameters).save(function(error, data) {
        expect(error).toBe(null);
        done();
      });
    });
  });
});
