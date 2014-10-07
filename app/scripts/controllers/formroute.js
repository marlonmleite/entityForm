'use strict';

/**
 * @ngdoc function
 * @name entityFormApp.controller:FormrouteCtrl
 * @description
 * # FormrouteCtrl
 * Controller of the entityFormApp
 */
angular.module('entityFormApp')
  .controller('FormrouteCtrl', function ($scope) {
    $scope.switch = 'off';

	$scope.alerts = [];

	//usado para testar campos individuais, fora de entityForms 
	//$scope.fieldProperties = {description: 'Nome do Usuário', name: 'NOMEUSU', id: 'NOMEUSU', type: 'S'};
	//$scope.fieldPropertiesDate = {description: 'Dt. Início', name: 'DTINICIO', id: 'DTINICIO', type: 'H'};

	//@todo implementar metadados de outra entidade, para demostrar
	//reusabilidade do código por entidades diferentes.
	var metadadosCidade = {

	}

	var metadadosBairro = {
			"name": "Bairro",
			"description": "Bairro",
			"field": [{
				"name": "CODBAI",
				"id": "CODBAI",
				"description": "Código",
				"type": "I",
				"width": "5",
				"isAutoNum": "true",
				"hasDefaultValue": "false",
				"order": "1",
				"isNuable": "false"
			},
			{
				"name": "NOMEBAI",
				"id": "NOMEBAI",
				"description": "Nome",
				"type": "S",
				"width": "20",
				"isAutoNum": "false",
				"hasDefaultValue": "false",
				"order": "2",
				"isNuable": "false"
			},
			{
				"name": "DTALTER",
				"isReadOnly": "true",
				"id": "DTALTER",
				"description": "Data de alteração",
				"type": "H",
				"width": "7",
				"isAutoNum": "false",
				"hasDefaultValue": "false",
				"order": "6",
				"isNuable": "true"
			},
			{
				"name": "DESCRICAOCORREIO",
				"isReadOnly": "true",
				"id": "DESCRICAOCORREIO",
				"description": "Nome do Correio",
				"type": "S",
				"width": "60",
				"isAutoNum": "false",
				"hasDefaultValue": "false",
				"order": "5",
				"isNuable": "true"
			},
			{
				"name": "CODREG",
				"fkTargetEntityName": "Regiao",
				"fkRelationName": "Região",
				"fkDescriptionField": "Regiao_NOMEREG",
				"id": "CODREG",
				"description": "Região",
				"type": "I",
				"width": "5",
				"isAutoNum": "false",
				"hasDefaultValue": "true",
				"order": "3",
				"isNuable": "false"
			}]
		};

	$scope.metadados = metadadosBairro;

	$scope.showAlert = function(){
		$scope.alerts.push({type: 'danger', msg: 'Estou mostrando uma mensagem de erro!'});
	};

	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};
	
	$scope.buscarParametro = function(chaveParametro){
		//var parametro = {param: {name: chaveParametro}};
		/*var parametro = {
					"dataSet":
					{"rootEntity":"ItemOrdemServico","crudListener":"br.com.sankhya.mgeserv.model.dwfdata.listeners.AutorizacaoOSCrudListener","includePresentationFields":"S","parallelLoader":"true","datasetid":"1410901947403_1","criteria":{"expression":{"$":"this.NUMOS = 901665"}},"entity":[{"path":"","fieldset":{"list":"NUMOS,NUMITEM,CODUSU,INICEXEC,HRINICIAL,HRFINAL,TEMPGASTO,CLASSIFICACAO"}},{"path":"Servico","field":[{"name":"CODPROD"},{"name":"DESCRPROD"}]},{"path":"OrdemServico","fieldset":{"list":"CODPARC,NUNOTA"}},{"path":"OrdemServico.Parceiro","field":{"name":"NOMEPARC"}}]}
					};*/

		ServiceProxy.setApplicationName("AngularJSTestes");
		/*ServiceProxy.callService('CRUDServiceProvider.loadRecords', parametro)
		.then(function(result){
				var data = result.data.responseBody;

				$scope.responseJson = data;

				if (data.param && data.param.name){
					$scope.result  = '\'' + data.param.value + '\'';
				} else {
					$scope.result  = 'Parametro não encontrado.';
				}
			});*/

		ServiceProxy.callService('SystemUtilsSP.getMGECoreParameter', parametro)
			.then(function(result){
					var data = result.data.responseBody;

					$scope.responseJson = data;

					if (data.param && data.param.name){
						$scope.result  = '\'' + data.param.value + '\'';
					} else {
						$scope.result  = 'Parametro não encontrado.';
					}
				});
	};
  });
