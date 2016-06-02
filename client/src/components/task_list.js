import React from 'react';
import { Col, ListGroup, Panel} from 'react-bootstrap/lib/';
import Task from './task';
import CreateButton from './buttons/create_button';
import * as tasksAPI from '../api/tasks';

export default class TaskList extends React.Component {
  render() {
    let { tasks, actions } = this.props

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
