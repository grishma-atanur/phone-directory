var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/homePage', {
            templateUrl: 'homePage.html',
            controller: 'MyController'
        })
        .when('/editContact', {
            templateUrl: 'editContact.html',
            controller: 'editController'
        })
        .when('/addContact', {
            templateUrl: 'addContact.html',
            controller: 'addcontactController'
        })
        .otherwise({
            redirectTo: '/homePage'
        });
});


myApp.controller('MyController', ['$scope', 'ContactService', '$location', function MyController($scope, ContactService, $location) {
    $scope.contacts = ContactService.names;

    $scope.deleteContact = function (contact, $index) {
        ContactService.deleteContact(contact);
        $scope.contacts.splice($index, 1);

    };
    $scope.onEdit = function($index){
        ContactService.selectedId = $index;
        console.log("setting value selectedId to : " + $index);
        $location.path( "/editContact" );
    };

}])
    .controller('addcontactController', ['$scope', 'ContactService', function ($scope, ContactService) {
        $scope.addContact = function () {
            var newContact = {
                "name": $scope.name,
                "phone": $scope.phoneNumber,
                "Email-id": $scope.emailId
            };
        };


    }])
    .controller('editController',['$scope','ContactService',function($scope,ContactService){
        $scope.init = function () {
            console.log("Inside $scope.init. selectedId is " + ContactService.selectedId);
            var name = ContactService.names[ContactService.selectedId];
            $scope.name = name.name;
            $scope.phone = name.phone;
            $scope.EmailId = name.EmailId;


        };
    }]);
myApp.service('ContactService', function () {
    this.selectedId;
    this.names = [
        {
            "name": "Barot Bellingham",
            "phone": "122345666",
            "Email-id": "Barot@gmail.com"
        },
        {
            "name": "grishma",
            "phone": "9535469419",
            "EmailId": "grishma@gmail.com"
        },
        {
            "name": "core scientist",
            "phone": "9742399049",
            "EmailId": "corescientist@gmail.com"
        },
        {
            "name": "neha",
            "phone": "677987698",
            "EmailId": "neha@gmail.com"
        },

    ]
    this.deleteContact = function (contact) {
        console.log("the" + " " + contact.name + " " + "has been deleted");
    };


});
