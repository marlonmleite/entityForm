'use strict';

/**
 * @ngdoc service
 * @name entityFormApp.ServiceProxy
 * @description
 * # ServiceProxy
 * Service in the entityFormApp.
 */
angular.module('entityFormApp')
  .service('ServiceProxy', function ServiceProxy($http, $q) {
    var counter = 0;
	var applicationName = "";

	this.setApplicationName = function(name) {
		applicationName = name;
	}

    this.callService = function(serviceName, content, config) {
    	var url = "/{0}/service.sbr?serviceName={1}&counter={2}&application={3}&outputType=json";
    	var module 	= "mge";

    	if (serviceName.indexOf("@") > -1) {
    		var s = serviceName.split("@");
    		module = s[0];
    		serviceName = s[1];
    	}

    	counter = counter + 1;

	  	url = url.replace("{0}", module);
      	url = url.replace("{1}", serviceName);
      	url = url.replace("{2}", counter);
      	url = url.replace("{3}", applicationName);

    	var requestContent = {serviceName: serviceName, requestBody: content};

    	if(config === undefined){
      		config = {headers:{'Content-Type': 'application/json; charset=UTF-8'}};
      	}

		return $http.post(url, requestContent, config)
					.success(function(data, status) {
						return process(data, status);
					})
					.error(function(data, status) {
						return process(data, status);
					});
    };

    var process = function(data, statusHttp) {
    	if(statusHttp == 200){
    		if (data.status == 0 || data.status == 3){
				var statusMessage = data.statusMessage;
				
				if (!statusMessage) {
					statusMessage = 'Erro não identificado.'
				}

				alert("Erro ao executar serviço. \n" + statusMessage);

				return $q.reject(data);
			}

			return data;
    	} else {
    		alert("Erro ao executar serviço. Status do erro http: " + status);

			return $q.reject(data);
    	}
    };
  });
