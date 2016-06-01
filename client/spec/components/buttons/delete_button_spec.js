import React from 'react';
import DeleteButton from '../../../src/components/buttons/delete_button';
import ReactTestUtils from 'react-addons-test-utils';

describe('DeleteButton', () => {
  it('renders button', (done) => {
    let instance = ReactTestUtils.renderIntoDocument(<DeleteButton onClick={null} />);
    ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button');
    done();
  });
});
