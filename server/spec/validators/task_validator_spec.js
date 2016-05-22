var taskValidator = require('../../validators/tasks_validator');

describe('isValid', function() {
  describe('when no title', function() {
    var data = {};

    it('is valid', function(done) {
      expect(taskValidator.isValid(data)).toEqual(true);
      done();
    });
  });

  describe('when title too short', function() {
    var data = { title: 'asd' };

    it('is not valid', function(done) {
      expect(taskValidator.isValid(data)).toEqual(false);
      done();
    });
  });

  describe('when title long enough', function() {
    var data = { title: 'asdasdasd' };

    it('is valid', function(done) {
      expect(taskValidator.isValid(data)).toEqual(true);
      done();
    });
  });
});
