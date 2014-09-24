'use strict';

/**
 * @ngdoc directive
 * @name entityFormApp.directive:entityForm
 * @description
 * # entityForm
 */
angular.module('entityFormApp')
  .directive('entityForm', function () {
    var controllerFormItem = function($scope) {
			
	};

	return {
		controller: controllerFormItem,
		templateUrl: 'views/directives/entityform.html',
		restrict: 'E',
		scope: { 
			metadata: '='
		}
	};
  });
