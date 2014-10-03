'use strict';

/**
 * @ngdoc directive
 * @name entityFormApp.directive:formItem
 * @description
 * # formItem
 */
angular.module('entityFormApp')
  .directive('formItem', function () {
  	var defaultDateFormat = "dd/MM/yyyy";
  	
    var controllerFormItem = function($scope) {
		$scope.open = function(event) {
		    event.preventDefault();
		    event.stopPropagation();

		    $scope.opened = true;
		};
	};

	return {
		controller: controllerFormItem,
		templateUrl: 'views/directives/formitem.html',
		restrict: 'E',
		scope: { 
			metadata: '=',
			record: '='
		},
		link: function(scope, element, attrs) {
			if (scope.metadata.dateFormat === undefined) {
				scope.metadata.dateFormat = defaultDateFormat;
			}
  		}
	};
  });
