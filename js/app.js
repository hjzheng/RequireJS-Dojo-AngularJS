/**
 * Created by hjzheng on 2014/12/4.
 * This is the project main file
 */
define([
    'angular',
    'angular-route',
    './controllers/index',
    './directives/index',
    './services/index'
], function (ng) {
    return ng.module('app', [
        'ngRoute',
        'app.controllers',
        'app.directives',
        'app.services'
    ]);
});