'use strict';

/**
 * @ngdoc directive
 * @name entityFormApp.directive:formItem
 * @description
 * # formItem
 */
angular.module('entityFormApp')
  .directive('formItem', function (dbDataSetExemple) {
  	
    var controllerFormItem = function($scope) {
    	$scope.opened =false;
    	
		$scope.openCalendar = function(event) {
		    event.preventDefault();
		    event.stopPropagation();

		    $scope.opened = !$scope.opened;
		};
	};

	var buildField = function(scope, element) {
		if (scope.fieldName !== undefined  && scope.fieldName != null) {
			scope.metadata = dbDataSetExemple.getFieldMetadata(scope.fieldName);

			if (scope.required !== undefined && scope.required != "") {
				scope.metadata.required = scope.required;
			}
		}
	};

	return {
		controller: controllerFormItem,
		templateUrl: 'views/directives/formitem.html',
		restrict: 'E',
		scope: { 
			metadata: '=?metadata',
			record: '=record',
			fieldName: '@',
			required: '@'
		},
		link: function(scope, element, attrs) {
			buildField(scope, element);
  		}
	};
  });
