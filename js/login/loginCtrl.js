var app = angular.module('rtfmApp');
app.controller('loginCtrl', function($scope){

	$scope.logMeIn = function(){
		alert($scope.username)
	}

})