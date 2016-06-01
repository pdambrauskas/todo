import React from 'react';
import TaskForm from '../../../src/components/forms/task_form';
import ReactTestUtils from 'react-addons-test-utils';

describe('TaskForm', () => {
  it('renders form', (done) => {
    let instance = ReactTestUtils.renderIntoDocument(<TaskForm onNewTask={null} />);
    ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'form');
    done();
  });
});
