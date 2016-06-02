import React from 'react';
import * as tasksAPI from '../api/tasks';
import TaskList from '../components/task_list';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TaskActions from '../actions/task_actions';

function mapStateToProps(state) {
  return { tasks: state ? state.tasks: [] }
}

class TaskListContainer extends React.Component {
  componentWillMount() {
    tasksAPI.all((error, tasks) => {
      let { dispatch } = this.props
      let action = TaskActions.loadTasks(tasks);
      dispatch(action);
    });
  }

  render() {
    let { dispatch, tasks } = this.props
    let actions = bindActionCreators(TaskActions, dispatch);
    return (<TaskList actions={actions} tasks={tasks}/>);
  }
}

export default connect(mapStateToProps)(TaskListContainer);
