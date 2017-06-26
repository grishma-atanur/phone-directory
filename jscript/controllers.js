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
            controller: 'addcontactController'
        })
        .otherwise({
            redirectTo: '/homePage'
        });
});


myApp.controller('MyController', ['$scope','ContactService', function MyController($scope, ContactService) {
    $scope.contacts = ContactService.names;

    $scope.deleteContact = function (contact,$index) {
        ContactService.deleteContact(contact);
        $scope.contacts.splice($index, 1);
    };

}])
.controller('addcontactController',['$scope', 'ContactService',function($scope, ContactService){
    $scope.addContact=function() {
        var newContact = {
            "name": $scope.name,
            "phone": $scope.phoneNumber,
            "Email-id": $scope.emailId
        };
        ContactService.names.push(newContact);
        alert("Data saved.");
    }

}]);
myApp.service('ContactService',function(){
    this.names=[
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
    this.deleteContact=function(contact){
        console.log("the"+ " " +contact.name + " " + "has been deleted");
    };

});
