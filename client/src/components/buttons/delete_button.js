import CotrolButton from './control_button'
import * as tasksAPI from '../../api/tasks';

export default class DeleteButton extends CotrolButton {
  constructor(props) {
    super(props, 'Delete task', 'remove');
  }

  buttonAction() {
    tasksAPI.destroy(this.props.id, (error, data) => {
      if (error) return;

      this.props.onTaskDestroy(data);
    });
  }
}
