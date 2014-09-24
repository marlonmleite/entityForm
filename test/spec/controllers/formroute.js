'use strict';

describe('Controller: FormrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('entityFormApp'));

  var FormrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormrouteCtrl = $controller('FormrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
