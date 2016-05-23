var React = require('react');
var TaskList = require('../../src/components/task_list');
var ReactTestUtils = require('react-addons-test-utils');

describe('TaskList', function() {
  var instance = ReactTestUtils.renderIntoDocument(<TaskList />);
  var task = { _id: '42', title: 'title', completed: false };

  describe('createTask', function() {
    it('adds task to state', function(done) {
      instance.createTask(task);
      expect(instance.state.tasks.length).toEqual(1);
      done();
    });
  });

  describe('with existing task', function() {
    beforeEach(function(done) {
      instance.setState({ tasks: [task] });
      done();
    });

    describe('completeTask', function() {
      var completedTask = { _id: '42', completed: true };

      it('completes the task', function(done) {
        instance.completeTask(completedTask);
        expect(instance.state.tasks[0]['completed']).toEqual(true);
        done();
      });
    });

    describe('destroyTask', function() {
      var destroyedTask = { _id: '42' };

      it('completes the task', function(done) {
        instance.destroyTask(destroyedTask);
        expect(instance.state.tasks.length).toEqual(0);
        done();
      });
    });
  });
});
