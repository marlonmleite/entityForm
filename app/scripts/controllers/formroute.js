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

	//@todo implementar metadados de outra entidade, para demostrar
	//reusabilidade do código por entidades diferentes.
	//procurar uma entidade sem muitos campos ou ligações (cidade pode não ser uma boa escolha)
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
				"id": "DTALTER",
				"description": "Data de alteração",
				"type": "H",
				"width": "7",
				"isAutoNum": "false",
				"hasDefaultValue": "false",
				"order": "5",
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
				"order": "4",
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
			},
			{//inventei esse campo (não existe na entidade real)
				"name": "TIPO",
				"id": "TIPO",
				"isReadOnly": "false",
				"description": "Tipo",
				"type": "C",
				"width": "8",
				"isAutoNum": "false",
				"hasDefaultValue": "true",
				"order": "7",
				"isNuable": "false",
				"options": [{"Label":"Agência", "Value":"AG"},
							{"Label":"Sub-agência", "Value":"SA"}]
			},
			{//inventei esse campo (não existe na entidade real)
				"name": "ATIVO",
				"id": "ATIVO",
				"isReadOnly": "false",
				"description": "Ativo",
				"type": "B",
				"width": "8",
				"isAutoNum": "false",
				"hasDefaultValue": "true",
				"order": "6",
				"isNuable": "false",
			}]
		};

	
	//essa poderia ser uma funcção de uma clásse js utilitária
	//e.g. "SanUtils.sortMetaFields(metadados)"
	var setMetadados = function(metadados){
		metadados.field.sort(function(a, b) {
		    var x = a.order; var y = b.order;
		    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});

		$scope.metadados = metadados;
	}

	setMetadados(metadadosBairro);
	
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
