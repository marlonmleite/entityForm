'use strict';

describe('Service: dbDataSetExemple', function () {

  // load the service's module
  beforeEach(module('entityFormApp'));

  // instantiate service
  var dbDataSetExemple;
  beforeEach(inject(function (_dbDataSetExemple_) {
    dbDataSetExemple = _dbDataSetExemple_;
  }));

  it('should do something', function () {
    expect(!!dbDataSetExemple).toBe(true);
  });

});
