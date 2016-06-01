import React from 'react';
import CompleteButton from '../../../src/components/buttons/complete_button';
import ReactTestUtils from 'react-addons-test-utils';

describe('CompleteButton', () => {
  it('renders button', (done) => {
    let instance = ReactTestUtils.renderIntoDocument(<CompleteButton onClick={null} />);
    ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button');
    done();
  });
});
