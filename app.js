const { response } = require("express");

console.log("Hello world");

console.log("Another commit");

console.log("Commit from branch feature");

console.log("Hello world");
console.log("new branch004");

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout) {
  $scope.myHeader = "Hello World!";
  $timeout(function () {
      $scope.myHeader = "How are you today?";
  }, 2000);
});

console.log("some changes made on the feature branch");