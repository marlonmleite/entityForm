'use strict';

/**
 * @ngdoc service
 * @name entityFormApp.dbDataSetExemple
 * @description
 * # dbDataSetExemple
 * Service in the entityFormApp.
 */
angular.module('entityFormApp')
  .service('dbDataSetExemple', function dbDataSetExemple() {
    this.getRecord = function(){
    	var record = {
						CODBAI: 100,
						NOMEBAI: 'Planalto',
						DTALTER: '2014/10/02',
						DESCRICAOCORREIO: 'Bairro A',
						CODREG: 10,
						ATIVO: true
					};
    	return record;
    };

    this.getFieldMetadata = function(fieldName) {
    	if (fieldName == "NOMEBAI") {
    		return {
						name: "NOMEBAI",
						id: "NOMEBAI",
						description: "Nome",
						type: "S",
						width: "20",
						isAutoNum: "false",
						hasDefaultValue: "false",
						order: "2",
						isNuable: "false"
					};
    	}

    	return null;
    };

  });
