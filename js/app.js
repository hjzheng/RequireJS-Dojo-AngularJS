/**
 * Created by hjzheng on 2014/12/4.
 * This is the project main file
 */
define([
    'angular',
    './controllers/index',
    './directives/index'
], function (ng) {
    return ng.module('app', [
        'app.controllers',
        'app.directives'
    ]);
});