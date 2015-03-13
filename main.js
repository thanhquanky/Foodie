function main($scope) {
    $scope.showGetLocation = false;
    $scope.showAddLocation = false;


    $scope.addLocation = function () {
        $scope.showGetLocation = true;
        $scope.showAddLocation = false;
    };

    $scope.getLocation = function () {
        $scope.showGetLocation = false;
        $scope.showAddLocation = true;
    };
    
    $scope.submit = function(myForm) {
        var dataObject = {
            location: $scope.myForm.location,
            food: $scope.myForm.food,
            capacity: $scope.myForm.capacity,
            time: $scope.myForm.time
        }
    }
};