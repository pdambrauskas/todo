import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';
import * as tasksAPI from '../../api/tasks';

export default class DeleteButton extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask() {
    tasksAPI.destroy(this.props.id, (error, data) => {
      if (error) return;

      this.props.onTaskDestroy(data);
    });
  }

  render() {
    return(
      <Button bsSize='xsmall' title='Mark as completed' onClick={this.deleteTask}>
        <Glyphicon glyph='remove' />
      </Button>
    );
  }
}
