/**
 * Created by hjzheng on 2014/12/4.
 * This is a require config file
 */
require.config({
    baseUrl: "./",
    //dojo and dijit are AMD module, so you can easy to use require to load them
    paths: {
        'dojo': 'dojo',
        'dijit': 'dijit',
        'angular': 'angular/angular',
        'domReady': 'requirejs/domReady'
    },

    //angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    // kick start application
    deps: ['./js/bootstrap']
});