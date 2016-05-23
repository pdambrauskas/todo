var React = require('react');
var CompleteButton = require('../../../src/components/buttons/complete');
var ReactTestUtils = require('react-addons-test-utils');

describe('CompleteButton', function() {
  it('renders button', function(done) {
    var instance = ReactTestUtils.renderIntoDocument(<CompleteButton onClick={null} />);
    ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button');
    done();
  });
});
