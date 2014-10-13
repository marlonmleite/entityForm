'use strict';

describe('Controller: ParceiroCtrl', function () {

  // load the controller's module
  beforeEach(module('entityFormApp'));

  var ParceiroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParceiroCtrl = $controller('ParceiroCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
