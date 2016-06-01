import React from 'react';
import Task from '../../src/components/task';
import ReactTestUtils from 'react-addons-test-utils';

describe('Task', () => {
  it('renders task', (done) => {
    let instance = ReactTestUtils.renderIntoDocument(<Task data={ { title: 'test' } } />);
    ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div');
    done();
  });
});
