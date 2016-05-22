var React = require('react');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');
var Button = require('react-bootstrap/lib/Button');
var tasksAPI = require('../../api/tasks');

module.exports = React.createClass({
  completeTask: function() {
    tasksAPI.update(this.props.id, { completed: true }, function(error, task) {
      this.props.onTaskComplete(task);
    }.bind(this));
  },

  render: function() {
    return(
      <Button bsSize='xsmall' title='Mark as completed' onClick={this.completeTask}>
        <Glyphicon glyph='check' />
      </Button>
    );
  }
});