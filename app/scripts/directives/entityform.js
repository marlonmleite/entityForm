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
    		alert("Clicou");
    		console.log($scope.record);
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
