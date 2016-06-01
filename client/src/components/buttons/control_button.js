import React from 'react';
import { Glyphicon, Button} from 'react-bootstrap/lib/';

export default class CotrolButton extends React.Component {
  constructor(props, title, icon) {
    super(props);

    this.title = title;
    this.icon = icon;

    this.buttonAction = this.buttonAction.bind(this);
  }

  buttonAction() {
  }

  render() {
    return(
      <Button bsSize='xsmall' title={this.title} onClick={this.buttonAction}>
        <Glyphicon glyph={this.icon} />
      </Button>
    );
  }
}
