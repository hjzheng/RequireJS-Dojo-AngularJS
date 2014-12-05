/**
 * Created by hjzheng on 2014/12/4.
 * This is a require config file
 */
require.config({
    baseUrl: "./",
    //dojo and dijit are AMD module, so you can easy to use require to load them
    paths: {
        'dojo': 'bower_components/dojo',
        'dijit': 'bower_components/dijit',
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'domReady': 'bower_components/domReady/domReady'
    },

    //angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        }
    },

    // kick start application
    deps: ['./js/bootstrap']
});