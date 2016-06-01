import * as ActionTypes from '../constants/action_types';

export function destroyTask(task) {
  return {
    ...task,
    type: ActionTypes.DELETE_TASK
  };
}

export function completeTask(task) {
  return {
    ...task,
    type: ActionTypes.COMPLETE_TASK,
  };
}

export function createTask(task) {
  return {
    ...task,
    type: ActionTypes.CREATE_TASK,
  };
}

export function loadTasks(tasks) {
  return { tasks: tasks, type: ActionTypes.LOAD_TASKS };
}
