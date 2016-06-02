import * as ActionTypes from '../constants/action_types';

function destroyTask(task) {
  return {
    task: task,
    type: ActionTypes.DELETE_TASK
  };
}

function completeTask(task) {
  return {
    task: task,
    type: ActionTypes.COMPLETE_TASK,
  };
}

function createTask(task) {
  return {
    task: task,
    type: ActionTypes.CREATE_TASK,
  };
}

function loadTasks(tasks) {
  return { tasks: tasks, type: ActionTypes.LOAD_TASKS };
}

export { destroyTask, completeTask, createTask, loadTasks };
