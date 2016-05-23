var React = require('react');
var Task = require('../../src/components/task');
var ReactTestUtils = require('react-addons-test-utils');

describe('Task', function() {
  it('renders task', function(done) {
    var instance = ReactTestUtils.renderIntoDocument(<Task data={ { title: 'test' } } />);
    ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div');
    done();
  });
});
