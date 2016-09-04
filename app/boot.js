System.register(['angular2/platform/browser', 'angular2/router', '/app/app.component', "angular2/http", "./services/data.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, app_component_1, http_1, data_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                data_service_1.DataService]);
        }
    }
});
//# sourceMappingURL=boot.js.map