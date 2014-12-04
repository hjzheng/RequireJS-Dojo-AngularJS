/**
 * Created by hjzheng on 2014/12/4.
 * The file define myController 1
 */
define(['./module'], function (controllers) {
    controllers.controller('MyCtrl1', ["$scope", function ($scope) {
       $scope.name = "This is myController 1";
       $scope.label = "click me";
    }]);
});
