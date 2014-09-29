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
		transclude: true,
		scope: { 
			metadata: '='
		},
		link: function(scope, element, attrs) {
  			var transcludeElem = element.find('#transcludeEntityForm');

  			if (transcludeElem.children().length == 0) {
  				scope.hasChild = false;
  			} else {
  				scope.hasChild = true;
  			}
  		}
	};
  });
