const { response } = require("express");

console.log("Hello world");

console.log("Another commit");

console.log("Commit from branch feature");

console.log("Hello world");
console.log("new branch004");


var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
    $http.get("welcome.htm").then(function(respone){
        $scope.myWelcome = response.data;
    });
});