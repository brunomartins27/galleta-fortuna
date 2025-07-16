var app = angular.module('fortuneApp', []);

app.controller('MainCtrl', function($scope, $http) {
  $scope.isLogged = false;
  $scope.showFortune = false;
  $scope.username = "";
  $scope.fortuneMessage = "";

  $scope.login = function() {
  if ($scope.username && $scope.username.length > 0) {
    $scope.isLogged = true;
    if(!$scope.$$phase) $scope.$apply();
  }
};

  $scope.logout = function() {
    $scope.isLogged = false;
    $scope.showFortune = false;
    $scope.username = "";
    $scope.fortuneMessage = "";
  };

$scope.openFortune = function() {
  $http.get('http://127.0.0.1:8002/fortune')
    .then(function(response) {
      $scope.fortuneMessage = response.data.message || "Sem mensagem";
      $scope.showFortune = true;
    })
    .catch(function(error) {
      $scope.fortuneMessage = "Ocorreu um erro ao buscar a fortuna.";
      $scope.showFortune = true;
      console.error(error);
    });
};

  $scope.back = function() {
    $scope.showFortune = false;
  };
});
