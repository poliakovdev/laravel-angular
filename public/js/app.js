var myApp = angular.module('myApp', ['ngRoute', 'ngCookies'], function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
});

myApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider.when('/', {
			templateUrl: 'templates/users/main.html',
			controller: 'indexController'
		});		

		/*$routeProvider.when('/dashboard', {
			templateUrl: 'templates/users/dashboard.html',
			controller: 'userController'
		});

		$routeProvider.when('/logout', {
			templateUrl: 'templates/users/logout.html',
			controller: 'userController'
		});*/

		$routeProvider.otherwise('/');
	}
]);