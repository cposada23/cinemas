(function(){
    angular.module('cineUdea')
    .controller('peliculaController', ['$scope', '$state', '$http','$stateParams','$sce', function($scope, $state, $http,$stateParams, $sce){
         $scope.trailerP="";
         
        $scope.$watch('$viewContentLoaded', function(){
            $scope.id = {
                id:$stateParams.peliculaID
            };
         
            console.log($scope.id);
            
            console.log("viewcontentloaded");
            $http.post('/api/pelicula/get',$scope.id).success(function(response) {
                console.log(response);
         
                console.log("pelicula obtenida correctamente");
                $scope.pelicula = response;
                var t = $scope.pelicula.trailer.split('/');
                $scope.trailer = "https://www.youtube.com/embed/"+ t[t.length  - 1]; 
                console.log("Scope.trailer....  " + $scope.trailer);
                $scope.url = $sce.trustAsResourceUrl($scope.trailer);
                console.log("URL  ...  "  , $scope.url);
                console.log("El trailer es "+$scope.pelicula.trailer);
                console.log("pelicula" + $scope.pelicula);
                console.log("NombrePelicula" + $scope.pelicula.nombre);
                console.log("Director pelicula" + $scope.pelicula.director);
            }).error(function(error) {
                console.error("Fallo" + error);
            });
            
        });
        
    }]);
}());