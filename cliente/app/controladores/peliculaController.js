(function(){
    angular.module('cineUdea')
    .controller('peliculaController', ['$scope', '$state', '$http', function($scope, $state, $http){
         $scope.trailerP="";
        $scope.$watch('$viewContentLoaded', function(){
            $scope.id = {
                id:localStorage.getItem('idpelicula')
            };
            $scope.nombreCine = localStorage.getItem('nombreCine');
            console.log("viewcontentloaded");
            $http.post('/api/pelicula/get',$scope.id).success(function(response) {
                console.log(response);
                console.log("pelicula obtenida correctamente");
                $scope.pelicula = response;
                $scope.trailerP=$scope.pelicula.trailer;
                console.log("El trailer es "+$scope.trailerP);
                console.log("pelicula" + $scope.pelicula);
                console.log("NombrePelicula" + $scope.pelicula.nombre);
                console.log("Director pelicula" + $scope.pelicula.director);
            }).error(function(error) {
                console.error("Fallo" + error);
            });
        });
        
    }]);
}());