import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap/lib/';
import * as tasksAPI from '../../api/tasks';
import jQuery from 'jquery'

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.submitTask = this.submitTask.bind(this);
  }

  submitTask(event) {
    event.preventDefault();
    var params = jQuery(event.target).serialize();

    tasksAPI.create(params, (error, data) => {
      if (error) return alert(data['message']);

      this.props.onNewTask(data);
    });
  }

  render() {
    return(
      <form onSubmit={this.submitTask}>
        <FormGroup controlId='title'>
          <ControlLabel>Title</ControlLabel>
          <FormControl type='text' name='title' required='true' pattern='([\w].*){4,}' title='4 characters minimum'  />
        </FormGroup>
        <FormGroup controlId='description'>
          <ControlLabel>Description</ControlLabel>
          <FormControl componentClass='textarea' name='description' required='true' />
        </FormGroup>

        <Button type='submit' bsStyle='primary'>Submit</Button>
      </form>
    );
  }
}
