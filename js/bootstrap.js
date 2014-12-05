/**
 * Created by hjzheng on 2014/12/4.
 * The whole project bootstrap by Angularjs
 */

define([
    'require',
    'angular',
    './route',
    './app'
], function (require, ng) {
    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
