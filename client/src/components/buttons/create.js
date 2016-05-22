var React = require('react');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');
var Button = require('react-bootstrap/lib/Button');
var TaskModal = require('../modals/task');

module.exports = React.createClass({
  getInitialState: function() {
    return { showModal: false };
  },

  openModal: function() {
    this.setState({ showModal: true });
  },

  closeModal: function() {
    this.setState({ showModal: false });
  },

  addNewTask: function(task) {
    this.closeModal();
    this.props.onNewTask(task)
  },

  render: function() {
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
});
