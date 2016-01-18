var app = angular.module('DonationWebApp');

app.controller('donationsController', ['$scope','donations', function($scope, donations) {
    // create a message to display in our view
    $scope.message = 'Donations Page!';
    $scope.donations = donations;

    $scope.delete = function(donation){
        if (confirm("Are you sure you want to delete? : ")) {
            donations.deleteDonation(donation);
        }
    };

    $scope.incrementUpvotes = function(donation){
        donations.incrementUpvotes(donation);
    };
}
]);