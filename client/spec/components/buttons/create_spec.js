var React = require('react');
var ReactDOM = require('react-dom');
var CreateButton = require('../../../src/components/buttons/create');
var ReactTestUtils = require('react-addons-test-utils');

describe('CreateButton', function() {
  it('opens modal', function(done) {
    var instance = ReactTestUtils.renderIntoDocument(<CreateButton onClick={null} />);
    var button = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button');
    var buttonDOM = ReactDOM.findDOMNode(button);

    ReactTestUtils.Simulate.click(buttonDOM);

    expect(instance.state['showModal']).toEqual(true);
    done();
  });
});
