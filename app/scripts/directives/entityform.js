'use strict';

/**
 * @ngdoc directive
 * @name entityFormApp.directive:entityForm
 * @description
 * # entityForm
 */
angular.module('entityFormApp')
  .directive('entityForm', function (dbDataSetExemple) {
    var controller = function($scope) {
    	$scope.loadRecord = function(){
    		var record = dbDataSetExemple.getRecord();
    		var field = $scope.metadata.field;

    		for(var i = 0; i < field.length; i++){
    			var fieldName = field[i].name;

    			if(record.hasOwnProperty(fieldName)){
    				field[i].name = record[fieldName];
    			}
    		}
    	};

    	$scope.saveRecord = function(){
    		console.log($scope.metadata.field);
    	};
	};

	return {
		controller: controller,
		templateUrl: 'views/directives/entityform.html',
		restrict: 'E',
		transclude: true,
		scope: { 
			metadata: '=metadata'
		},
		link: function(scope, element, attrs) {
  			scope.loadRecord();
  		}
	};
  });
