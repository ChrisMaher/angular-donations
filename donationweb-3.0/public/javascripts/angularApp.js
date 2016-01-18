var app = angular.module('DonationWebApp', ['ngRoute']);

app.factory('donations', function(){

    var donations = [{paymenttype: 'PayPal', amount: 1500, upvotes: 0},
        {paymenttype: 'Direct', amount: 1000, upvotes: 2}
    ];

    donations.add = function(paymenttype, amount){
        donations.push({paymenttype: paymenttype, amount: amount, upvotes: 0});
    };

    donations.incrementUpvotes = function(donation) {
        donation.upvotes += 1;
    };

    donations.deleteDonation = function(donation) {
        var index = donations.indexOf(donation);
        console.log( "Index is : " + index );
        donations.splice(index, 1);
    };

    return donations;
});

app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.ejs',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.ejs',
            controller  : 'aboutController'
        })

        // route for the donate page
        .when('/donate', {
            templateUrl : 'pages/donate.ejs',
            controller  : 'donateController'
        })

        // route for the donations page
        .when('/donations', {
            templateUrl : 'pages/donations.ejs',
            controller  : 'donationsController'
        })
        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.ejs',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope

app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Homer for President!';
});

app.controller('donateController', function($scope, $location , donations) {
    // create a message to display in our view
    $scope.message = 'Donation Page!';
    $scope.amount = 1000;
    $scope.options = [{ name: "PayPal", id: 0 }, { name: "Direct", id: 1 }];
    $scope.paymenttype = $scope.options[0];

    $scope.addDonation = function(){
        donations.add($scope.paymenttype.name,$scope.amount);
        $location.path('/donations');
    };

    $scope.amount = 1000;
});

app.controller('donationsController', function($scope, donations) {
    // create a message to display in our view
    $scope.message = 'Donations Page!';
    $scope.donations = donations;

    $scope.incrementUpvotes = function(donation){
        donations.incrementUpvotes(donation);
    };

    $scope.delete = function(donation){
        if (confirm("Are you sure you want to delete?")) {
            donations.deleteDonation(donation);
        }
    };
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

