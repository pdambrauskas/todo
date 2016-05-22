var React = require('react');
var Col = require('react-bootstrap/lib/Col');
var ListGroup = require('react-bootstrap/lib/ListGroup');
var Panel = require('react-bootstrap/lib/Panel');
var Task = require('./task');
var CreateButton = require('./buttons/create');
var jQuery = require('jQuery');
var tasksAPI = require('../api/tasks');

module.exports = React.createClass({
  getInitialState: function() {
    return { tasks: [] };
  },

  componentDidMount: function() {
    tasksAPI.all(function(error, tasks) {
      this.setState({ tasks: tasks });
    }.bind(this));
  },

  destroyTask: function(task) {
    var index = this.getTaskIndex(task);

    this.state.tasks.splice(index, 1);
    this.setState({ tasks: this.state.tasks });
  },

  completeTask: function(task) {
    var index = this.getTaskIndex(task);

    this.state.tasks[index]['completed'] = true;
    this.setState({ tasks: this.state.tasks });
  },

  createTask: function(task) {
    this.state.tasks.push(task);
    this.setState({ tasks: this.state.tasks });
  },

  getTaskIndex: function(task) {
    var taskFromState = jQuery.grep(this.state.tasks, function(object) {
      return object._id == task._id;
    });

    return this.state.tasks.indexOf(taskFromState[0]);
  },

  render: function() {
    return (
      <Col xs={12} md={6} xsOffset={3}>
        <Panel header='ToDo List' bsStyle='primary'>
          <ListGroup>
            {
              this.state.tasks.map(function(task) {
                return <Task key={task._id}
                             data={task}
                             onTaskDestroy={this.destroyTask}
                             onTaskComplete={this.completeTask} />;
              }.bind(this))
            }
          </ListGroup>
          <CreateButton onNewTask={this.createTask}/>
        </Panel>
      </Col>
    );
  }
});
