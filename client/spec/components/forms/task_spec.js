var React = require('react');
var TaskForm = require('../../../src/components/forms/task');
var ReactTestUtils = require('react-addons-test-utils');

describe('TaskForm', function() {
  it('renders form', function(done) {
    var instance = ReactTestUtils.renderIntoDocument(<TaskForm onNewTask={null} />);
    ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'form');
    done();
  });
});
