(function(){
    var app = angular.module('cineUdea');
   
    
    app.controller('registroController', ['$scope', '$state', '$http','$stateParams', function($scope, $state, $http,$stateParams){
        
       $scope.data = {
            availableOptions: [
              {id: '1', name: 'Femenino'},
              {id: '2', name: 'Masculino'}
            ],
            selectedOption: {id: '1', name: 'Femenino'} //This sets the default value of the select in the ui
        };
       
       
        $scope.nuevo = {};
        $scope.generos = ["Masulino" , "Femenino"];
        $scope.tipoDoc = ["CC" , "CE" , "TI"];
        $scope.addUser = function () {
            console.log("aregando usuario");
            console.log(JSON.stringify($scope.nuevo));
            $http.post('/api/usuario/registro', $scope.nuevo).success(function (response) {
                console.log("registo correcto");
                console.log(response);
            }).error(function (error) {
                console.error(error);
            });
                
            
        };
    }]);
}());