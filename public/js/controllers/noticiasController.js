app.controller('noticiasController', ['$scope','$http', function($scope,$http) {
	$scope.rss = [];
	$scope.faq = generateFaq();
	$scope.rssTitle = "";
	$http({
	    method  : 'GET',
	    url     : 'http://cdn01.ib.infobae.com/adjuntos/162/rss/economia.xml',
	    timeout : 10000,
	    params  : {}, 
	    transformResponse : function(data) {
	   		var x2js = new X2JS();
			var aftCnv = x2js.xml_str2json(data);
			return aftCnv;
	    }
	}).success(function(data, status, headers, config) {
	    //console.dir(JSON.stringify(data));
		//debugger;
	    for (var i = data.rss.channel.item.length-1; i >= 0; i--) {
			if(data.rss.channel.item[i].description.__cdata === "\n\n" || data.rss.channel.item[i].description.__cdata === "\n")
				data.rss.channel.item.splice(i,1);
			else
				data.rss.channel.item[i].description.__cdata = eliminatehtmltags(data.rss.channel.item[i].description.__cdata);
		}
	    $scope.rssTitle = data.rss.channel.title;
	    $scope.rss = data.rss.channel.item;//.documentElement.innerHTML;
	}).error(function(data, status, headers, config) {
	    $scope.rss = [{
	    	title: {
	    		__cdata: "No se encontraron noticias."
	    	},
	    	description: {
	    		__cdata: "Intente nuevamente mas tarde."
	    	}
	    }];
	    //console.log(JSON.stringify(data))
	    console.log("Error: " + data.Error.Code + ". Mensaje: " + data.Error.Message);
	});
}]);

var eliminatehtmltags = function(texto) {
	var waitforclose = false;
	var resultado = '';
	for (var i = 0, len = texto.length; i < len; i++) {
		if(texto[i] === '<') {
			waitforclose = true;
		}
		else if (texto[i] === '>') {
			waitforclose = false;
		}
		else if (!waitforclose) {
			resultado = resultado + texto[i];
		}
	}
	return resultado;
}

var generateFaq = function() {
	var faq = [{
			question: "Pregunta 1",
			answer: "respuesta 1"
		},
		{
			question: "Pregunta 2",
			answer: "respuesta 2"
		},
		{
			question: "Pregunta 3",
			answer: "respuesta 3"
		},
		{
			question: "Pregunta 4",
			answer: "respuesta 4"
		}];

	return faq;
}
