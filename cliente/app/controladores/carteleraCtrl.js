(function(){
    var app = angular.module('cineUdea');
   
    
    app.controller('carteleraCtrl', ['$scope', '$state', '$http','$stateParams', function($scope, $state, $http,$stateParams){
        
        
       
        
        $scope.$watch('cartelera' ,  function function_name(argument) {
            console.log("cartelera ha cambiado "  + $scope.cartelera);
        })
        
         
        $scope.$watch(localStorage.getItem('cartelera'), function(){
            
            
             $scope.id = {
                id:$stateParams.carteleraID
            };
           
             $scope.nombreCine =$stateParams.cineNombre ;
            console.log("viewcontentloaded .....................");
            $http.post('/api/cartelera/listar',$scope.id).success(function(response) {
                console.log("response de carteleras " + JSON.stringify(response));
                $scope.peliculas = response.peliculas;
                console.log("Peliculas" + $scope.peliculas);
               
            }).error(function(error) {
                console.error("Fallo" + error);
            });
        });
        
        
    
        
    }]);
}());