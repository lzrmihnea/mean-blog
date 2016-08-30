System.register(["angular2/core", "app/services/contact.service", "angular2/router", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, contact_service_1, router_1, common_1;
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
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams, _formBuilder) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._formBuilder = _formBuilder;
                }
                NewContactComponent.prototype.onSubmit = function (newContactValue) {
                    this._contactService.insertContact(newContactValue);
                    this._router.navigate(["Contacts"]);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'firstName': ['', common_1.Validators.required],
                        'lastName': [this._routeParams.get('lastName'), common_1.Validators.required],
                        'phone': ['', common_1.Validators.required],
                        'email': ['', common_1.Validators.required]
                    });
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n        Create a component\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n            <div>\n                <div>\n                 <label for=\"first-name\">First Name:</label>\n                    <input \n                        type=\"text\" \n                        id=\"first-name\"\n                        [ngFormControl]=\"myForm.controls['firstName']\"\n                        >\n                </div>\n                <span *ngIf=\"!myForm.controls['firstName'].valid\">Not valid</span>\n                <div>\n                     <label for=\"last-name\">Last Name:</label>    \n                     <input \n                        type=\"text\" \n                        id=\"last-name\" \n                        [ngFormControl]=\"myForm.controls['lastName']\"\n                        >\n                </div> \n                <div>       \n                     <label for=\"phone\">Phone number:</label>\n                    <input \n                        type=\"text\" \n                        id=\"phone\" \n                        [ngFormControl]=\"myForm.controls['phone']\"\n                        >\n                </div>\n                <div>\n                    <label for=\"email\">Email:</label>\n                    <input \n                        type=\"text\" \n                        id=\"email\" \n                        [ngFormControl]=\"myForm.controls['email']\"\n                        >\n                </div>\n            </div>   \n            <button type=\"submit\" [disabled]=\"!myForm.valid\">Create contact</button>\n        </form>\n    ",
                        styles: ["\n        label {\n        display: inline-block;\n        width: 140px;\n        }\n        \n        input {\n            width: 250px;\n        }\n        \n        .ng-invalid.ng-touched{\n            border: 1px solid red;\n        }\n    "],
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof contact_service_1.ContactService !== 'undefined' && contact_service_1.ContactService) === 'function' && _a) || Object, router_1.Router, router_1.RouteParams, common_1.FormBuilder])
                ], NewContactComponent);
                return NewContactComponent;
                var _a;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});
//# sourceMappingURL=new-contact.component.js.map