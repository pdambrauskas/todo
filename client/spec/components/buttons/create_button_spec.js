import React from 'react';
import ReactDOM from 'react-dom';
import CreateButton from '../../../src/components/buttons/create_button';
import ReactTestUtils from 'react-addons-test-utils';

describe('CreateButton', () => {
  it('opens modal', (done) => {
    let instance = ReactTestUtils.renderIntoDocument(<CreateButton onClick={null} />);
    let button = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button');
    let buttonDOM = ReactDOM.findDOMNode(button);

    ReactTestUtils.Simulate.click(buttonDOM);

    expect(instance.state['showModal']).toEqual(true);
    done();
  });
});
