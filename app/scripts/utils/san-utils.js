function SanUtils() {
	this.teste = "a";
}

//Implementado dessa forma para ele nunca recriar a função, pois essa função na
//classe utilitária reecria o método toda vez que é chamado
SanUtils.prototype.orderMetadados = function(metadados) {
	metadados.field.sort(function(a, b) {
	    var x = a.order; var y = b.order;
	    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
};