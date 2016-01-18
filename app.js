var app = angular.module('DonationWebApp', ['ngRoute']);

app.factory('donations', function(){

  var donations = [{paymenttype: 'PayPal', amount: 1500, upvotes: 0},
                    {paymenttype: 'Direct', amount: 1000, upvotes: 2}
                    ];

  return donations;
});

app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

             // route for the donate page
            .when('/donate', {
                templateUrl : 'pages/donate.html',
                controller  : 'donateController'
            })

             // route for the donations page
            .when('/donations', {
                templateUrl : 'pages/donations.html',
                controller  : 'donationsController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })
    });

// create the controller and inject Angular's $scope

  app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Homer for President!';
  });

  app.controller('donateController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Donation Page!';
    $scope.amount = 1000;
    $scope.options = [{ name: "PayPal", id: 0 }, { name: "Direct", id: 1 }];
    $scope.paymenttype = $scope.options[0];
  });

  app.controller('donationsController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Donations Page!';
  });

    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });
