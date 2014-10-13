'use strict';

/**
 * @ngdoc function
 * @name entityFormApp.controller:ParceiroCtrl
 * @description
 * # ParceiroCtrl
 * Controller of the entityFormApp
 */
angular.module('entityFormApp')
  .controller('ParceiroCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('json/parceiro/getMetadadosResponse.json').then(function(response){
    	var entitys = response.data.responseBody.metadata.entity;

    	angular.forEach(entitys, function(value){
    		var sanUtils = new SanUtils();

    		if (value.name == "Parceiro") {
    			var metadadosParceiro = value;

    			sanUtils.orderMetadados(metadadosParceiro);

    			$scope.metadados = metadadosParceiro;
    		}
    	});
    });
  });
