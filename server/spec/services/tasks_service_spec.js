var tasksService = require('../../services/tasks_service');
var task = require('../../models/task');

describe('tasks_service', function() {
  describe('all', function() {

    it('retrieves all tasks', function(done) {
      spyOn(task, 'find');
      tasksService.all();

      expect(task.find).toHaveBeenCalled();
      done();
    });
  });

  describe('find', function() {
    it('finds task by id', function(done) {
      spyOn(task, 'findById');
      tasksService.find(42, null);

      expect(task.findById).toHaveBeenCalledWith(42, null);
      done();
    });
  });

  describe('update', function() {
    it('updates the task', function(done) {
      var attributes = { title: 'new' };

      spyOn(task, 'findByIdAndUpdate');
      tasksService.update(42, attributes, null);

      expect(task.findByIdAndUpdate).toHaveBeenCalledWith(42, attributes, null);
      done();
    });
  });

  describe('destroy', function() {
    it('destroys the task', function(done) {
      spyOn(task, 'findByIdAndRemove');
      tasksService.destroy(42, null);

      expect(task.findByIdAndRemove).toHaveBeenCalledWith(42, null);
      done();
    });
  });
});
