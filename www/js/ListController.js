app.controller('ListController', function($ionicHistory, $state, $scope, $http, $ionicLoading, $ionicPopup){

		var root = 'https://jsonplaceholder.typicode.com';

		var req = {
		 method: 'GET',
		 headers: {
		   'Content-Type': 'application/x-www-form-urlencoded'
		 },
		 //url: 'https://spry.localtunnel.me/login.php',
		 url: root + '/posts?userId=1',
		};
				//str="http://spry123.atwebpages.com/login.php?e="+$scope.user.email+"&p="+$scope.user.password;


		$ionicLoading.show({
			content: 'Loggin in...',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});

		$http(req).success(function (response){
		  	$scope.messages = response;
		  	$ionicLoading.hide();
		}).error(function() {   						//if login failed
				$ionicLoading.hide();
				window.alert('Login failed');
		});


		$scope.goBackState = function() {
			$ionicHistory.goBack();
  		};

});