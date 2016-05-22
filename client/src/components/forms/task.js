var React = require('react');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');
var tasksAPI = require('../../api/tasks');
var jQuery = require('jquery');

module.exports = React.createClass({
  onSubmit: function(event) {
    var data = jQuery(event.target).serialize();
    event.preventDefault();

    tasksAPI.create(data, function(error, task) {
      this.props.onNewTask(task);
    }.bind(this));
  },

  render: function() {
    return(
      <form onSubmit={this.onSubmit}>
        <FormGroup controlId='title'>
          <ControlLabel>Title</ControlLabel>
          <FormControl type='text' name='title' />
        </FormGroup>
        <FormGroup controlId='description'>
          <ControlLabel>Description</ControlLabel>
          <FormControl componentClass='textarea' name='description' />
        </FormGroup>
        <Button type='submit' bsStyle='primary'>Submit</Button>
      </form>
    );
  }
});
