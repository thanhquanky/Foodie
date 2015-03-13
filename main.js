
var foodie = angular.module('foodie', ['firebase']);


foodie.controller('MainController', ['$scope', '$firebaseObject', '$firebaseArray', function($scope, $firebaseObject, $firebaseArray) {
    Firebase.INTERNAL.forceWebSockets();
    var ref = new Firebase('https://amber-inferno-7229.firebaseio.com/FoodEvents');

    $scope.foodEvents = new $firebaseArray(ref);
    $scope.showGetLocation = false;
    $scope.showAddLocation = false;


    $scope.addLocation = function () {
        $scope.showGetLocation = false;
        $scope.showAddLocation = true;
    };

    $scope.getLocation = function () {
        $scope.showGetLocation = true;
        $scope.showAddLocation = false;
    };

    $scope.submit = function(myForm) {
        var dataObject = {
            location: $scope.myForm.location,
            food: $scope.myForm.food,
            capacity: $scope.myForm.capacity,
            time: $scope.myForm.time
        }
        $scope.foodEvents.$add(dataObject);
    }
}]);