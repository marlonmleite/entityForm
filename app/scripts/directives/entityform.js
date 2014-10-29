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
    	$scope.saveRecord = function() {
    		console.log($scope.record);
    	};

    	$scope.hasElementTranscludeDirective = false;
    };

	return {
		controller: controller,
		templateUrl: 'views/directives/entityform.html',
		restrict: 'E',
		transclude: true,
		scope: { 
			metadata: '=metadata'
		},
		link: function(scope, element, attrs, controller, transcludeFn) {
			scope.record = dbDataSetExemple.getRecord();

			if (transcludeFn().context.children.length > 0) {
				scope.hasElementTranscludeDirective = true;
			}
  	}
	};
  });
