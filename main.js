
var foodie = angular.module('foodie', ['firebase','ui.bootstrap']);


foodie.controller('MainController', ['$scope', '$firebaseObject', '$firebaseArray', function($scope, $firebaseObject, $firebaseArray) {
    Firebase.INTERNAL.forceWebSockets();
    var foodEventRef = new Firebase('https://amber-inferno-7229.firebaseio.com/FoodEvents');


    $scope.foodEvents = new $firebaseArray(foodEventRef);
    $scope.showGetLocation = false;
    $scope.showAddLocation = false;

    $scope.myInterval = 1000;



    $scope.addLocation = function () {
        $scope.showGetLocation = false;
        $scope.showAddLocation = true;
    };

    $scope.getLocation = function () {
      console.log($scope.showGetLocation);
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

foodie.value('flickrConfig', {
    user_id: '99179128@N07',
    api_key: '006d5ace5a1ec6e87d501a2753da1bc7'
  });