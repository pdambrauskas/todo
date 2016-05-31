import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';
import * as tasksAPI from '../../api/tasks';

export default class CompleteButton extends React.Component {
  constructor(props) {
    super(props);

    this.completeTask = this.completeTask.bind(this);
  }

  completeTask() {
    tasksAPI.update(this.props.id, 'completed=true', (error, data) => {
      if (error) return;

      this.props.onTaskComplete(data);
    });
  }

  render() {
    return(
      <Button bsSize='xsmall' title='Mark as completed' onClick={this.completeTask}>
        <Glyphicon glyph='check' />
      </Button>
    );
  }
}
