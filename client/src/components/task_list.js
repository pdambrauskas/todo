import React from 'react';
import { Col, ListGroup, Panel} from 'react-bootstrap/lib/';
import Task from './task';
import CreateButton from './buttons/create_button';
import * as tasksAPI from '../api/tasks';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TaskActions from '../actions/task_actions';

function mapStateToProps(state) {
  return { tasks: state ? state.tasks: [] }
}

class TaskList extends React.Component {
  componentWillMount() {
    tasksAPI.all((error, tasks) => {
      let { dispatch } = this.props
      let action = TaskActions.loadTasks(tasks);
      dispatch(action);
    });
  }

  render() {
    let { tasks, dispatch } = this.props
    let actions = bindActionCreators(TaskActions, dispatch);

    return(
      <Col xs={12} md={12} lg={6} lgOffset={3}>
        <Panel header='ToDo List' bsStyle='primary'>
          <ListGroup>
            {
              tasks.map((task) => {
                return <Task key={task._id}
                             data={task}
                             onTaskDestroy={actions.destroyTask}
                             onTaskComplete={actions.completeTask} />;
              })
            }
          </ListGroup>
          <CreateButton onNewTask={actions.createTask}/>
        </Panel>
      </Col>
    );
  }
}

export default connect(mapStateToProps)(TaskList);
