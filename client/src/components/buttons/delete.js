var React = require('react');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');
var Button = require('react-bootstrap/lib/Button');
var tasksAPI = require('../../api/tasks');

module.exports = React.createClass({
  deleteTask: function() {
    tasksAPI.destroy(this.props.id, function(error, data) {
      if (error) return;

      this.props.onTaskDestroy(data);
    }.bind(this));
  },

  render: function() {
    return(
      <Button bsSize='xsmall' title='Mark as completed' onClick={this.deleteTask}>
        <Glyphicon glyph='remove' />
      </Button>
    );
  }
});
