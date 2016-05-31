import React from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import CompleteButton from './buttons/complete_button';
import DeleteButton from './buttons/delete_button';

export default class Task extends React.Component {
  render() {
    let task = this.props.data

    return(
      <ListGroupItem header={task.title} disabled={task.completed} className='clearfix'>
        <ButtonGroup bsClass='btn-group pull-right'>
          <CompleteButton id={task._id} onTaskComplete={this.props.onTaskComplete} />
          <DeleteButton id={task._id} onTaskDestroy={this.props.onTaskDestroy} />
        </ButtonGroup>
        {task.description}
      </ListGroupItem>
    );
  }
}
