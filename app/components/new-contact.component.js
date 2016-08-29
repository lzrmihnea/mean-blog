System.register(["angular2/core", "app/services/contact.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, contact_service_1, router_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                NewContactComponent.prototype.onSubmit = function () {
                    this._contactService.insertContact(this.newContact);
                    this._router.navigate(["Contacts"]);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.newContact = {
                        firstName: '',
                        lastName: this._routeParams.get('lastName'),
                        phone: '',
                        email: ''
                    };
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n        Create a component\n        <form #myForm=\"ngForm\">\n            <div>\n                <div>\n                 <label for=\"first-name\">First Name:</label>\n                    <input \n                        type=\"text\" \n                        id=\"first-name\"\n                        ngControl=\"firstName\"\n                        [(ngModel)]=\"newContact.firstName\"\n                        required\n                        >\n                </div>\n                <div>\n                     <label for=\"last-name\">Last Name:</label>    \n                     <input \n                        type=\"text\" \n                        id=\"last-name\" \n                        ngControl=\"lastName\"\n                        [(ngModel)]=\"newContact.lastName\"\n                        required\n                        >\n                </div> \n                <div>       \n                     <label for=\"phone\">Phone number:</label>\n                    <input \n                        type=\"text\" \n                        id=\"phone\" \n                        ngControl=\"phone\"\n                        [(ngModel)]=\"newContact.phone\"\n                        required\n                        >\n                </div>\n                <div>\n                    <label for=\"email\">Email:</label>\n                    <input \n                        type=\"text\" \n                        id=\"email\" \n                        ngControl=\"email\"\n                        [(ngModel)]=\"newContact.email\"\n                        required\n                        >\n                </div>\n            </div>   \n            <button type=\"submit\">Create contact</button>\n        </form>\n    ",
                        styles: ["\n        label {\n        display: inline-block;\n        width: 140px;\n        }\n        \n        input {\n            width: 250px;\n        }\n        \n        .ng-invalid.ng-touched{\n            border: 1px solid red;\n        }\n    "],
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof contact_service_1.ContactService !== 'undefined' && contact_service_1.ContactService) === 'function' && _a) || Object, router_1.Router, router_1.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
                var _a;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});
//# sourceMappingURL=new-contact.component.js.map