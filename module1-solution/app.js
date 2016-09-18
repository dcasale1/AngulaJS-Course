(function () {
 'use strict';

 angular.module('LunchCheckApp', [])
 .controller('LunchCheckController', LunchCheckController);

 LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope) {
   $scope.name = "";
   $scope.replyValue = "";
   $scope.length = '';
   $scope.myStringArray = '';

   $scope.sayMessage = function () {
     return "List comma separated dishes you usually have for lunch";
   };

   $scope.checkInput = function () {
     var replyMessage = "";
     $scope.myStringArray = $scope.name.split(',');
     $scope.length = $scope.myStringArray.length;
     if ($scope.length > "3") {
            replyMessage = "Too much!";
        } else  if ($scope.name == "") {
            replyMessage = "Please enter data first";
        }
        else  if ($scope.length <= "3") {
            replyMessage = "Enjoy!";
        }
        else {
            replyMessage = "Please enter data first";
        }
     $scope.replyValue = replyMessage;
   };
 }
 })();
