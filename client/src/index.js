import React from 'react';
import ReactDOM from 'react-dom';
import TaskListContainer from './containers/task_list_container';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskListReducer from './reducers/task_list';

const STORE = createStore(taskListReducer);

ReactDOM.render(
  <Provider store={STORE}>
    <TaskListContainer />
  </Provider>,
  document.getElementById('app')
);
