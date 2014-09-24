'use strict';

describe('Service: ServiceProxy', function () {

  // load the service's module
  beforeEach(module('entityFormApp'));

  // instantiate service
  var ServiceProxy;
  beforeEach(inject(function (_ServiceProxy_) {
    ServiceProxy = _ServiceProxy_;
  }));

  it('should do something', function () {
    expect(!!ServiceProxy).toBe(true);
  });

});
