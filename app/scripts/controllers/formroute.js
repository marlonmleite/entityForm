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
			{
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
			{
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

	var sanUtils = new SanUtils();
	sanUtils.orderMetadados(metadadosBairro);

	$scope.metadados = metadadosBairro;
  });