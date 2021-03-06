var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/studentlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.studentlist = response;
    $scope.student = "";
  });
};

refresh();

$scope.addStudent = function() {
  console.log($scope.student);
  $http.post('/studentlist', $scope.student).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/studentlist/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/studentlist/' + id).success(function(response) {
    $scope.student = response;
  });
};

$scope.update = function() {
  console.log($scope.student._id);
  $http.put('/studentlist/' + $scope.student._id, $scope.student).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.student = "";
}

}]);﻿
