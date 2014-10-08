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
						CODREG: 10
					};
    	return record;
    };
  });
