/**
 * Created by hjzheng on 2014/12/4.
 * The file define myService 1
 */
define(['./module','dijit/Dialog'], function (services, Dialog) {
    services.service('dojoDialog', function(){
        var createDialog = function(dojoConfig){
            var dialog = new Dialog(dojoConfig);
            return dialog;
        };

        return {
            create: createDialog
        };
    });
});