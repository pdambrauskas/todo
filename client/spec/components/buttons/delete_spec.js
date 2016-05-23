var React = require('react');
var DeleteButton = require('../../../src/components/buttons/delete');
var ReactTestUtils = require('react-addons-test-utils');

describe('DeleteButton', function() {
  it('renders button', function(done) {
    var instance = ReactTestUtils.renderIntoDocument(<DeleteButton onClick={null} />);
    ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button');
    done();
  });
});
