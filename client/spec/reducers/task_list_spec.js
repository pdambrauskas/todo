import taskListReducer from '../../src/reducers/task_list';
import * as ActionTypes from '../../src/constants/action_types';

describe('TaskList Reducer', () => {
  let state = { tasks: [] };

  describe('when undefined action', () => {
    let action = { type: 'UNDEFINED' };

    it('returns passed state', () => {
      expect(taskListReducer(state, action)).toEqual(state);
    });
  });

  describe('when CREATE_TASK action', () => {
    let task = { _id: 42 };
    let action = { task: task, type: ActionTypes.CREATE_TASK };

    it('adds task to state', () => {
      expect(taskListReducer(state, action)).toEqual({ tasks: [task] });
    });
  });

  describe('when DELETE_TASK action', () => {
    let task = { _id: 42 };
    let state = { tasks: [task] };
    let action = { task: task, type: ActionTypes.DELETE_TASK };

    it('removes task from state', () => {
      expect(taskListReducer(state, action)).toEqual({ tasks: [] });
    });
  });

  describe('when COMPLETE_TASK action', () => {
    let task = { _id: 42, completed: false };
    let state = { tasks: [task] };
    let action = { task: task, type: ActionTypes.COMPLETE_TASK };

    it('marks task as completed', () => {
      expect(taskListReducer(state, action)).toEqual(
        { tasks: [{ _id: 42, completed: true }] }
      );
    });
  });

  describe('when LOAD_TASKS action', () => {
    let tasks = [{ _id: 42 }, { _id: 24 }];
    let action = { tasks: tasks, type: ActionTypes.LOAD_TASKS };

    it('loads tasks to state', () => {
      expect(taskListReducer(state, action)).toEqual({ tasks: tasks });
    });
  });
});
