/**
 * Created by hjzheng on 2014/12/4.
 * The file define myController2
 */
define(['./module'], function (controllers) {
    controllers.controller('MyCtrl2', ['$scope', function ($scope) {
        $scope.name = "This is myController 2";
        $scope.buttonConfig = {
            label: "complicated button",
            onClick: function () {
                console.log("click complicated button");
            }
        };

        $scope.label = "parsed button";
        $scope.click = function(){
            console.log("click my parsed button");
        };
    }]);
});
