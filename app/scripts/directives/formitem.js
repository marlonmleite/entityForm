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

		$scope.buildField = function(){
			$scope.field = {};
			$scope.field.fieldId = $scope.fieldId;
			$scope.field.fieldName = $scope.fieldName;
			$scope.field.fieldType = $scope.fieldType;
			$scope.field.fieldRequired = $scope.fieldRequired;
			$scope.field.fieldDisabled = $scope.fieldDisabled;
			$scope.field.fieldDescription = $scope.fieldDescription;

			if ($scope.dateFormat === undefined || $scope.dateFormat == "" || $scope.dateFormat == null) {
				$scope.dateFormat = defaultDateFormat;
			}
		};

	};

	return {
		controller: controllerFormItem,
		templateUrl: 'views/directives/formitem.html',
		restrict: 'E',
		scope: { 
			field: '=field',
			fieldId: '@fieldId',
			fieldName: '@fieldName',
			fieldType: '@fieldType',
			fieldRequired: '@fieldRequired',
			fieldDisabled: '@fieldDisabled',
			fieldDescription: '@fieldDescription'
		},
		link: function(scope, element, attrs) {
			if (scope.field === undefined || scope.field == "" || scope.field == null) {
				scope.buildField();
			}
  		}
	};
  });
