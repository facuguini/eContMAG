var app = angular.module('mag', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
        .when('/estudio', {
            templateUrl: 'templates/estudio.html',
            controller: 'estudioController'
        })
        .when('/servicios', {
            templateUrl: 'templates/servicios.html',
            controller: 'serviciosController'
        })
        .when('/noticias', {
            templateUrl: 'templates/noticias.html',
            controller: 'noticiasController'
        })
        .when('/contacto', {
            templateUrl: 'templates/contacto.html',
            controller: 'contactoController'
        })
    //$locationProvider.html5Mode(true);
});
//var directives = angular.module('directives');

app.directive('showtab',
    function () {
        return {
            link: function (scope, element, attrs) {
                element.click(function(e) {
                    e.preventDefault();
                    $(element).tab('show');
                });
            }
        };
    });
/*app.factory('FeedService',['$http',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);*/