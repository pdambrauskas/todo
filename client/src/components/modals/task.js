var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var TaskForm = require('../forms/task');

module.exports = React.createClass({
  render: function() {
    return(
      <Modal bsStyle='success' show={this.props.showModal} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm onNewTask={this.props.onNewTask} />
        </Modal.Body>
      </Modal>
    );
  }
});
