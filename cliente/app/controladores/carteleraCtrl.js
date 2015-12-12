(function(){
    var app = angular.module('cineUdea');
   
    
    app.controller('carteleraCtrl', ['$scope', '$state', '$http', function($scope, $state, $http){
        
        
        $scope.cartelera = localStorage.getItem('cartelera');
        
        $scope.$watch('cartelera' ,  function function_name(argument) {
            console.log("cartelera ha cambiado "  + $scope.cartelera);
        })
        
         
        $scope.$watch(localStorage.getItem('cartelera'), function(){
            $scope.id = {
                id:localStorage.getItem('cartelera')
            };
            $scope.nombreCine = localStorage.getItem('nombreCine');
            console.log("viewcontentloaded .....................");
            $http.post('/api/cartelera/listar',$scope.id).success(function(response) {
                console.log("response de carteleras " + JSON.stringify(response));
                $scope.peliculas = response.peliculas;
                console.log("Peliculas" + $scope.peliculas);
               
            }).error(function(error) {
                console.error("Fallo" + error);
            });
        });
        
        $scope.setPelicula = function (pelicula) {
            console.log(JSON.stringify(pelicula));
            console.log("id:" + pelicula.id);
            localStorage.setItem('idpelicula', pelicula.id);
        }
    
        
    }]);
}());