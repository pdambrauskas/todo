var React = require('react');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
var ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
var CompleteButton = require('./buttons/complete');
var DeleteButton = require('./buttons/delete');

module.exports = React.createClass({
  render: function() {
    var task = this.props.data
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
});
