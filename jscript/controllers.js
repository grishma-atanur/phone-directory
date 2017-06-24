var myApp= angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider) {
	$routeProvider
		.when('/homepage1', {
			templateUrl: 'homePage.html',
			controller: 'MyController'
		})
		.when('/edit', {
			templateUrl: 'edit.html',
			controller: 'MyController'
		})
		.otherwise({
			redirectTo: '/homePage'
		});
});


myApp.controller('MyController',['$scope', function MyController($scope) {
  $scope.contacts= [
  {
    "name":"Barot Bellingham",
   "phone":"122345666",
   "Email-id":"Barot@gmail.com" 
  },
  {
    "name":"grishma",
   "phone":"9535469419",
   "Email-id":"grishma@gmail.com" 
  },
  {
    "name":"core scientist",
   "phone":"9742399049",
   "Email-id":"corescientist@gmail.com" 
  },
  {
    "name":"neha",
   "phone":"677987698",
   "Email-id":"neha@gmail.com" 
  },
 
]
}]);

