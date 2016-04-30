//Javascript
var app = angular.module('heranca', []);
app.controller('PaiController', ['$scope', function($scope){
  $scope.turno = 'manhã';
  $scope.nome = 'Nataniel';
}]);
app.controller('FilhoController', ['$scope', function($scope){
  $scope.nome = 'Fulano';
}]);
app.controller('NetoController', ['$scope', function($scope){
  $scope.nome = 'Paiva';
  $scope.turno = 'Noite';
}]);
