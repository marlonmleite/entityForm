'use strict';

/**
 * @ngdoc directive
 * @name entityFormApp.directive:formItem
 * @description
 * # formItem
 */
angular.module('entityFormApp')
  .directive('formItem', function (dbDataSetExemple) {
  	var defaultDateFormat = "dd/MM/yyyy";
  	
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
			//A ideia é buscar o dataset que está sendo utilizado no pai desse cara, ou seja, passar a referência do 
			//dataSet do EntityForm para buscar as informações
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
			/*if (scope.metadata !== undefined && scope.metadata.dateFormat === undefined) {
				scope.metadata.dateFormat = defaultDateFormat;
			}*/

			buildField(scope, element);
  		}
	};
  });
