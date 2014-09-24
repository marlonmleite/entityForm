'use strict';

describe('Directive: formItem', function () {

  // load the directive's module
  beforeEach(module('entityFormApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<form-item></form-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the formItem directive');
  }));
});
