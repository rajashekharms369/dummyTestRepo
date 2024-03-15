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

console.log("Feature Branch 005 added &&&&&&&&&&&&&&")
console.log("some changes made on the feature branch");
console.log("Change 6 on main");
<<<<<<< HEAD
console.log("change on main");
console.log("feature006")
console.log("Change 7 on main");
=======
console.log("feature006")
>>>>>>> 68960b4 (feature006 added on featureBranch006)
