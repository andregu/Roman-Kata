var app = angular.module('romanKata', []);

app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
});

app.controller('RomanArabicController',function($scope, $rootScope, romanKata) {
	$scope.answer = 0;
	
	$scope.convert = function(){
		var number = $scope.number;
		romanKata.getNumber(number).then(function(data){
			$scope.answer = data.data.arabic;
			$rootScope.$broadcast('newConversion');
		});
	};
});


app.controller('ArabicRomanController', function($scope , $rootScope, romanKata) {
	$scope.answer = 0;
	
	$scope.convert = function(){
		var number = $scope.number;
		romanKata.getNumber(number).then(function(data){
			$scope.answer = data.data.roman;
			$rootScope.$broadcast('newConversion');
		});
	};
});


app.controller('NumbersController', function($scope, romanKata) {

	$scope.getData = function (){
		romanKata.getNumbers().then(function(data){
			$scope.numbers = data.data;
		});
	}
	$scope.getData();
	$scope.$on('newConversion', function() {
		$scope.getData();
	});        
});


app.factory('romanKata', function ($http,$q) {
	return {
		getNumber : function(number){
			return  $http({
				method: 'GET',
				url: "http://localhost:8080/numbers/"+number
			})
			.success(function(data, status) {
				if(status === 200)
				{
					return data;
				}
			})
			.error(function(data, status) {
				console.log(data, status);
			});
		},
		getNumbers: function () {
			return  $http({
				method: 'GET',
				url: "http://localhost:8080/numbers"
			})
			.success(function(data, status) {
				if(status === 200)
				{
					return data;
				}
			})
			.error(function(data, status) {
				console.log(data, status);
			});
		}
	}
});