'use strict';

describe('Service: subscribe', function() {
  // load the service's module
  beforeEach(module('serApp.subscribe'));

  // instantiate service
  var subscribe;
  beforeEach(inject(function(_subscribe_) {
    subscribe = _subscribe_;
  }));

  it('should do something', function() {
    expect(!!subscribe).to.be.true;
  });
});
