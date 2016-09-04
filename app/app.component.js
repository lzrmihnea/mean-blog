System.register(['angular2/core', 'angular2/router', '/app/components/contact-list.component', "app/components/new-contact.component", "app/components/http-test.component", "./child-component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, contact_list_component_1, new_contact_component_1, http_test_component_1, child_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            },
            function (http_test_component_1_1) {
                http_test_component_1 = http_test_component_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.date = new Date();
                    this.randomData = new Promise(function (resolve, reject) {
                        setTimeout(function () { return resolve('Random data!'); }, 1000);
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <header>\n            <nav>\n                <a [routerLink]=\"['Contacts']\">Contacts</a>\n                <a [routerLink]=\"['NewContact']\">New Contact</a>    \n            </nav>\n        </header>\n        <div class=\"main\">\n            <router-outlet></router-outlet>\n            <http-test></http-test>\n            <div class=\"pipes\">\n                <h2>Date Pipe</h2>\n                <div>\n                    {{date | date}}\n                </div>\n                <h2>Number pipe</h2>\n                <div>\n                    {{4.566 | number:'1.2-2'}}\n                </div>\n                <h2>Currency Pipe</h2>\n                <div>\n                    {{ 15.99 | currency:'EUR':true}}    \n                </div>\n                <h2>Stateful Pipe</h2>\n                <div>{{randomData | async}}</div>\n            </div>\n            <input type=\"text\" #parentInput (keyup)=\"0\"><br>\n            <button>Click me</button>\n            <div class=\"child\">\n                <child [parentValue]=\"parentInput.value\"></child>\n            </div>\n        </div>\n",
                        directives: [
                            contact_list_component_1.ContactListComponent,
                            http_test_component_1.HttpTestComponent,
                            router_2.ROUTER_DIRECTIVES,
                            child_component_1.ChildComponent
                        ],
                        styleUrls: ["./app/app.css"]
                    }),
                    router_1.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent, useAsDefault: true },
                        { path: '/newcontact', name: 'NewContact', component: new_contact_component_1.NewContactComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map