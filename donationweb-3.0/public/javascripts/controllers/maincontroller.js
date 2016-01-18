var app = angular.module('DonationWebApp');

app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Homer for President!';
});