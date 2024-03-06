const { response } = require("express");

console.log("Hello world");

console.log("Another commit");

console.log("Commit from branch feature");

console.log("Hello world");
console.log("new branch004");

<<<<<<< HEAD
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $timeout){
    $scope.myHeader = "Hello world";
    $timeout(function(){
        $scope.myHeader = "How are you today";
    },2000)
=======

var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
    $http.get("welcome.htm").then(function(respone){
        $scope.myWelcome = response.data;
    });
>>>>>>> 51c4fc3f183d025b2c2f498e11228b1b0e95e1c5
});