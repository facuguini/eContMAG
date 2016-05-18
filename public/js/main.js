var app = angular.module('mag', ['ngRoute']).config(function($routeProvider){
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
});