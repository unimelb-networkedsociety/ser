'use strict';

describe('Service: toaster', function() {
  // load the service's module
  beforeEach(module('serApp.toaster'));

  // instantiate service
  var toaster;
  beforeEach(inject(function(_toaster_) {
    toaster = _toaster_;
  }));

  it('should do something', function() {
    expect(!!toaster).to.be.true;
  });
});
