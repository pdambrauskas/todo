import React from 'react';
import { Glyphicon, Button } from 'react-bootstrap/lib/';
import TaskModal from '../modals/task_modal';

export default class CreateButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  addNewTask(task) {
    this.closeModal();
    this.props.onNewTask(task)
  }

  render() {
    return(
      <div>
        <TaskModal showModal={this.state.showModal}
                   onHide={this.closeModal}
                   onNewTask={this.addNewTask}/>
        <Button bsStyle='success' onClick={this.openModal}>
          <Glyphicon glyph='plus' /> New Task
        </Button>
      </div>
    );
  }
}
