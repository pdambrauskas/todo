var helper = require('../helper');
var tasksService = require('../../services/tasks_service');
var Task = require('../../models/task');

helper.setupDB();

describe('tasks_service', function() {
  afterEach(function() {
    Task.remove({}, function() {});
  });

  describe('all', function() {
    beforeEach(function() {
      Task.create({ title: 'task#1' }, null);
      Task.create({ title: 'task#2' }, null);
    });

    it('retrieves all tasks', function(done) {
      tasksService.all(function(error, tasks) {
        expect(tasks.length).toEqual(2);
        done();
      });
    });
  });

  describe('task actions', function() {
    var firstTask;

    beforeEach(function(done) {
      Task.create({ title: 'task#2' }, function(error, task) {
        firstTask = task;
        done()
      });
    });

    describe('find', function() {
      it('finds task by id', function(done) {
        tasksService.find(firstTask['_id'], function(error, task) {
          expect(task['_id']).toEqual(firstTask['_id']);
          done();
        });
      });
    });

    describe('update', function() {
      it('updates the task', function(done) {
        tasksService.update(firstTask._id, { title: 'trololo' }, function(error, task) {
          expect(task.title).toEqual('trololo');
          done();
        });
      });
    });

    describe('destroy', function() {
      it('destroys the task', function(done) {
        tasksService.destroy(firstTask._id, function(error, task) {
          tasksService.find(firstTask['_id'], function(error, task) {
            expect(task).toEqual(null);
            done();
          });
        });
      });
    });
  });
});
