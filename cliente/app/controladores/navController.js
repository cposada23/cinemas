(function(){
    var app = angular.module('cineUdea')
    
    app.controller('navController', ['$scope', '$state', '$http', function($scope, $state, $http){
      
      //login
      if(localStorage['User-Data']){
        $scope.loggedIn= true;
      }else{
        $scope.loggedIn= false;
      }
        
        
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
      
      $scope.User={
        email:null,
        password:null
      };
    
      
      
      $scope.login= function () {
        console.log($scope.User);
        
        
        $scope.request = 
        {
          email: $scope.User.email,
          password:$scope.User.password
        };
        
        $http.post('/api/usuario/login',$scope.request).success(function (response) {
          
          console.log("Correcto");
          console.log("response" + JSON.stringify(response));
          $scope.auth= response.auth;
          if($scope.auth === 1){
            console.log("login correcto");
            localStorage.setItem('User-Data' ,  JSON.stringify(response));
            $scope.nombre = response.nombre;
            $scope.loggedIn = true;
            $scope.User.email ="";
            
          }else{
            console.log("login incorrecto nombre de usuio o contraseña no validos");
            alert("Nombre de usuario o contraseña incorrectos");
            $scope.User.password="";
          }
          
        }).error(function (error) {
          console.error(error);
        });
      }
      
      $scope.logout= function () {
        console.log("logout");
        $scope.loggedIn = false;
        localStorage.setItem('User-Data', null);
        localStorage.removeItem('User-Data');
      }
      
      
  }]);
}());
