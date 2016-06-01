import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/task_list';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskListReducer from './reducers/task_list';

const STORE = createStore(taskListReducer);

ReactDOM.render(
  <Provider store={STORE}>
    <TaskList />
  </Provider>,
  document.getElementById('app')
);
