import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Panel from 'react-bootstrap/lib/Panel';
import Task from './task';
import CreateButton from './buttons/create_button';
import jQuery from 'jquery'
import * as tasksAPI from '../api/tasks';

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [] };

    this.destroyTask = this.destroyTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  componentDidMount() {
    tasksAPI.all((error, tasks) => { this.setState({ tasks: tasks }) });
  }

  destroyTask(task) {
    let index = this.getTaskIndex(task);

    this.state.tasks.splice(index, 1);
    this.setState({ tasks: this.state.tasks });
  }

  completeTask(task) {
    let index = this.getTaskIndex(task);

    this.state.tasks[index]['completed'] = true;
    this.setState({ tasks: this.state.tasks });
  }

  createTask(task) {
    this.state.tasks.push(task);
    this.setState({ tasks: this.state.tasks });
  }

  getTaskIndex(task) {
    let taskFromState = jQuery.grep(this.state.tasks, (object) => {
      return object._id == task._id;
    });

    return this.state.tasks.indexOf(taskFromState[0]);
  }

  render() {
    return(
      <Col xs={12} md={12} lg={6} lgOffset={3}>
        <Panel header='ToDo List' bsStyle='primary'>
          <ListGroup>
            {
              this.state.tasks.map((task) => {
                return <Task key={task._id}
                             data={task}
                             onTaskDestroy={this.destroyTask}
                             onTaskComplete={this.completeTask} />;
              })
            }
          </ListGroup>
          <CreateButton onNewTask={this.createTask}/>
        </Panel>
      </Col>
    );
  }
}
