(function(){
    var app = angular.module('cineUdea');
    var i = 1;
    
    app.controller('carteleraCtrl', ['$scope', '$state', '$http', function($scope, $state, $http){
        
         
         $scope.$watch('$viewContentLoaded', function(){
            $scope.id = {
                id:localStorage.getItem('cartelera')
            };
            $scope.nombreCine = localStorage.getItem('nombreCine');
            console.log("viewcontentloaded");
            $http.post('/api/cartelera/listar',$scope.id).success(function(response) {
                console.log("response de carteleras " + JSON.stringify(response));
                $scope.peliculas = response.peliculas;
                console.log("Peliculas" + $scope.peliculas);
                i = i + 1;
                console.log(i);
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