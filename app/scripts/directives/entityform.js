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
    	$scope.saveRecord = function(){
    		alert("//TOODO: Send save record request...");
    		console.log($scope.record);
    		console.log($scope.entityForm);
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
  			scope.record = dbDataSetExemple.getRecord();
  		}
	};
  });
