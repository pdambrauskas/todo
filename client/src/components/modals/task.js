import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import TaskForm from '../forms/task'

export default class TaskModal extends React.Component {
  render() {
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
}
