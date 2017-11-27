'use strict';

describe('Service: smoothScroll', function() {
  // load the service's module
  beforeEach(module('serApp.smoothScroll'));

  // instantiate service
  var smoothScroll;
  beforeEach(inject(function(_smoothScroll_) {
    smoothScroll = _smoothScroll_;
  }));

  it('should do something', function() {
    expect(!!smoothScroll).to.be.true;
  });
});
