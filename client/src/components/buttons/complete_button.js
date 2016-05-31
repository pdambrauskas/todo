import CotrolButton from './control_button'
import * as tasksAPI from '../../api/tasks';

export default class CompleteButton extends CotrolButton {
  constructor(props) {
    super(props, 'Mark as completed', 'check');
  }

  buttonAction() {
    tasksAPI.update(this.props.id, 'completed=true', (error, data) => {
      if (error) return;

      this.props.onTaskComplete(data);
    });
  }
}
