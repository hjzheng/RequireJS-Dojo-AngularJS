/**
 * Created by hjzheng on 2014/12/4.
 * This file define directive my-button
 * use dijit/form/Button
 */
define(['./module', 'dijit/form/Button'], function (directives, Button) {

    directives.directive('myButton', function () {
        return {
            restrict: 'EA',
            template: '<div></div>',
            replace: true,
            scope: {
                label: "@"
            },
            link: function ($scope, iElm, iAttrs, controller) {
                new Button({
                    label: $scope.label,
                    onClick: function () {
                        console.log("click dojo button");
                    }
                }, iElm[0]).startup();
            }
        };
    });

    directives.directive('myComplicatedButton', function () {
        return {
            restrict: 'EA',
            template: '<div></div>',
            replace: true,
            scope: {
                config: "="
            },
            link: function ($scope, iElm, iAttrs, controller) {
                new Button($scope.config, iElm[0]).startup();
            }
        };
    });

    directives.directive('myParsedButton', function () {
        return {
            restrict: 'EA',
            template: '<div><button data-dojo-type="dijit/form/Button" type="button"></button></div>',
            replace: true,
            scope: {
                label: "@",
                click: "&"
            },
            link: function ($scope, iElm, iAttrs, controller) {
                parser.parse(iElm[0].parentNode).then(function(instances){
                    var myParsedButton = instances[0];
                    myParsedButton.on("click", $scope.click());
                    myParsedButton.set("label", $scope.label);
                });
            }
        };
    });

    directives.directive('myDojoParse', function () {
        return {
            restrict: 'E',
            template: '<div ng-transclude></div>',
            replace: true,
            transclude: true,
            link: function ($scope, iElm, iAttrs, controller) {
                parser.parse(iElm[0].parentNode).then(function(instances){
                    console.log(instances);
                });
            }
        };
    });
});
