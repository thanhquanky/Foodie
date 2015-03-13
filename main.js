
var foodie = angular.module('foodie', ['firebase','ui.bootstrap']);
foodie.value('flickrConfig', {
  user_id: '99179128@N07',
  api_key: '006d5ace5a1ec6e87d501a2753da1bc7'
});

foodie.controller('MainController', ['$scope', '$filter', '$firebaseObject', '$firebaseArray', function($scope,$filter, $firebaseObject, $firebaseArray) {
    Firebase.INTERNAL.forceWebSockets();
    var foodEventRef = new Firebase('https://amber-inferno-7229.firebaseio.com/FoodEvents');


    $scope.foodEvents = new $firebaseArray(foodEventRef);
    $scope.showGetLocation = false;
    $scope.showAddLocation = false;

    $scope.myInterval = 5000;

    $scope.newEvent = {
      'location': '',
      'time': '',
      'date': '',
      'capacity': '',
      'food': ''
    }

    $scope.newEvent.date = $filter('date')(new Date(),'MM/dd/yyyy')

    $scope.addLocation = function () {
        $scope.showGetLocation = false;
        $scope.showAddLocation = true;
    };

    $scope.getLocation = function () {
      console.log($scope.showGetLocation);
        $scope.showGetLocation = true;
        $scope.showAddLocation = false;

    };

    $scope.submit = function() {
      $scope.foodEvents.$add($scope.newEvent);
    }
}]);

