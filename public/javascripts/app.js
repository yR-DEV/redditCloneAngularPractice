

var app = angular.module("RedditClone", []);


app.controller("NavBarController", function($scope) {
  $scope.newPostBool = false;


  $scope.newPostForm = function() {
    // if(!$scope.newPostBool) {
    //   $scope.newPostBool = true;
    // } else {
    //   $scope.newPostBool = false;
    // }
  }
})
