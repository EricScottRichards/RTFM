var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/login', {
			templateUrl: 'js/login/login.html',
			controller: 'loginCtrl'

		})

		.when('/threads', {

		})

		.when('/threads/:threadId', {

		})

		.otherwise({
			redirectTo: '/login'
		})
});