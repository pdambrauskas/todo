import * as ActionTypes from '../constants/action_types';

export default function tasks(state, action) {
  switch (action.type) {
    case ActionTypes.CREATE_TASK:
      let tasks = state.tasks.slice(0);
      tasks.push(action.task);

      return {
        ...state,
        tasks: tasks
      };

    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task._id != action.task._id;
        })
      };

    case ActionTypes.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task._id == action.task._id) task.completed = true;
          return task;
        })
      };

    case ActionTypes.LOAD_TASKS:
      return {
        ...state,
        tasks: action.tasks
      };

    default:
      return state;
  }
}
