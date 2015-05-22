var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.constant(fb, {
	"https://rtfm-eric.firebaseio.com/EricScottRichards"
})

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