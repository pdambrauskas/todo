import * as TaskActions from '../../src/actions/task_actions';
import * as ActionTypes from '../../src/constants/action_types';

describe('TaskActions', () => {
  let task = { _id: 42, title: 'test' };

  describe('#destroyTask', () => {
    it('returns action', () => {
      expect(TaskActions.destroyTask(task)).toEqual(
        { task: task, type: ActionTypes.DELETE_TASK }
      );
    });
  });

  describe('#createTask', () => {
    it('returns action', () => {
      expect(TaskActions.createTask(task)).toEqual(
        { task: task, type: ActionTypes.CREATE_TASK }
      );
    });
  });

  describe('#completeTask', () => {
    it('returns action', () => {
      expect(TaskActions.completeTask(task)).toEqual(
        { task: task, type: ActionTypes.COMPLETE_TASK }
      );
    });
  });

  describe('#loadTasks', () => {
    it('returns action', () => {
      expect(TaskActions.loadTasks([task])).toEqual(
        { tasks: [task], type: ActionTypes.LOAD_TASKS }
      );
    });
  });
});
