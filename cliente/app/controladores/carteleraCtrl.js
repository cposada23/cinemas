(function(){
    var app = angular.module('cineUdea');
    var i = 1;
    
    app.controller('carteleraCtrl', ['$scope', '$state', '$http', function($scope, $state, $http){
        console.log($scope.nombreCine);
         
         $scope.$watch('$viewContentLoaded', function(){
            $scope.id = {
                id:localStorage.getItem('cartelera')
            };
            $scope.nombreCine = localStorage.getItem('nombreCine');
            console.log("viewcontentloaded");
            $http.post('/api/cartelera/listar',$scope.id).success(function(response) {
                console.log(response);
                $scope.peliculas = response.peliculas;
                console.log("Peliculas" + $scope.peliculas);
                i = i + 1;
                console.log(i);
            }).error(function(error) {
                console.error("Fallo" + error);
            });
        });
    
        
    }]);
}());