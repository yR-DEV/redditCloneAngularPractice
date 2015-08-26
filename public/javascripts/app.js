

var app = angular.module("RedditClone", []);


app.controller("NavBarController", function($scope) {

  $scope.newPostBool = false;
  console.log($scope.newPostBool);
  $scope.newPostForm = function() {

    $scope.newPostBool = true;
    console.log($scope.newPostBool);
  };

});
