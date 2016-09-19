(function(){
  'use strict';
  angular.module('myApp', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
      $scope.text = "";
      $scope.lunchCheck = function() {
        var val = $scope.text;
        var valString = val.split(',');
        if (val == "") {
          return $scope.result = "Please enter data first";
        } else if (valString.length > 3) {
          return $scope.result = "Too much!";
        } else {
          return $scope.result = "Enjoy!";
        }
      };
  };
})();
