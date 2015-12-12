(function(){
    angular.module('cineUdea')
    .controller('navController', ['$scope', '$state', '$http', function($scope, $state, $http){
      $http.get("/api/cines/listar").success(function (response) {
        console.log("Cines listados correctamente");
        $scope.cines=response;
      }).error(function (error) {
        console.error(error);
      })
      $scope.tab = 1;
      $scope.setTab = function(newValue){
        $scope.tab = newValue;
        console.log(newValue);
      };
      $scope.isSet = function(tabName){
        return $scope.tab === tabName;
      };
      
      $scope.setCartelera = function (cine) {
        localStorage.setItem('cartelera', cine.cartelera);
        localStorage.setItem('nombreCine', cine.nombre);
        console.log("Carteleraaa " + cine.cartelera);
        console.log("Cine " + cine.nombre);
      }
  }]);
}());
