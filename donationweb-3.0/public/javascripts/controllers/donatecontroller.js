var app = angular.module('DonationWebApp');


app.controller('donateController', ['$scope', '$location', 'donations', function($scope, $location, donations) {

    $scope.formData = {};

    $scope.message = 'Donate Page!';
    $scope.amount = 1000;
    $scope.options = [{ name: "PayPal", id: 0 }, { name: "Direct", id: 1 }];
    $scope.formData.paymentOptions = $scope.options[0];

    $scope.addDonation = function(){
        console.log('Adding FormData: ' + $scope.formData.paymentOptions.name + '//' + $scope.formData.amount);
        donations.add($scope.formData.paymentOptions.name,$scope.formData.amount);
        $location.path('/donations');
    };

//Reset our formData fields
    $scope.formData.paymenttype = 'PayPal';
    $scope.formData.amount = 1000;
    $scope.formData.upvotes = 0;
}

]);