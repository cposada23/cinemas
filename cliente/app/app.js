(function(){
    var app = angular.module('cineUdea', ['ui.router']);
    //configuracion de la app
    app.config(function($stateProvider, $urlRouterProvider){
        //default
        $urlRouterProvider.otherwise('Home');
        
        
        $stateProvider
        .state('Home',{
            url:"/home",
            templateUrl:"cliente/templates/home.html",
            controller:"homeCtrl"
        })
        .state('Cartelera',{
            url:"/cartelera",
            templateUrl: "cliente/templates/cartelera.html",
            controller:"carteleraCtrl"
        });
    });
}());