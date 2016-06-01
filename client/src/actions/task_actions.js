import * as ActionTypes from '../constants/action_types';

function destroyTask(task) {
  return {
    ...task,
    type: ActionTypes.DELETE_TASK
  };
}

function completeTask(task) {
  return {
    ...task,
    type: ActionTypes.COMPLETE_TASK,
  };
}

function createTask(task) {
  return {
    ...task,
    type: ActionTypes.CREATE_TASK,
  };
}

function loadTasks(tasks) {
  return { tasks: tasks, type: ActionTypes.LOAD_TASKS };
}

export { destroyTask, completeTask, createTask, loadTasks };
