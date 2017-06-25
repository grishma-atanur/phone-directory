var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/homePage', {
            templateUrl: 'homePage.html',
            controller: 'MyController'
        })
        .when('/editContact', {
            templateUrl: 'editContact.html',
            controller: 'MyController'
        })
        .when('/addContact', {
            templateUrl: 'addContact.html',
            controller: 'MyController'
        })
        .otherwise({
            redirectTo: '/homePage'
        });
});


myApp.controller('MyController', ['$scope', function MyController($scope) {
    $scope.contacts = [
        {
            "name": "Barot Bellingham",
            "phone": "122345666",
            "Email-id": "Barot@gmail.com"
        },
        {
            "name": "grishma",
            "phone": "9535469419",
            "Email-id": "grishma@gmail.com"
        },
        {
            "name": "core scientist",
            "phone": "9742399049",
            "Email-id": "corescientist@gmail.com"
        },
        {
            "name": "neha",
            "phone": "677987698",
            "Email-id": "neha@gmail.com"
        },

    ]
}]);

