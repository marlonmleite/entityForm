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
						DTALTER: '2014/10/02 00:00:00',
						DESCRICAOCORREIO: 'Nenhuma',
						CODREG: 10
					};
    	return record;
    };
  });
