app.controller('StartCtrl', ['$translate', "$scope", "$http", "$ionicLoading", "$q",  "$ionicActionSheet", "$ionicModal", "$state", function($translate, $scope,  $http, $ionicLoading, $q, $ionicActionSheet, $ionicModal, $state) {

  $scope.mySelect = "en";

  $scope.changeLang = function changeLangFn(langKey) {
      $translate.use(langKey);
  };

  $scope.modallogin = null;


  $ionicModal.fromTemplateUrl('login.html', {
  	  id: '1',
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modallogin = modal;
  });


  $scope.openLoginModal = function()
  {
  	  $scope.modallogin.show();
  };

  $scope.closeLoginModal = function()
  {
  	  $scope.modallogin.hide();
  };

  $scope.login = function() {

		$state.go('list', {}, {reload:true});

		$scope.modallogin.hide();

  };




}]);