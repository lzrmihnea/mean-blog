System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var Component2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_dataService) {
                    this._dataService = _dataService;
                }
                Component2Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomData();
                };
                Component2Component.prototype.onAddItem = function (data) {
                    this._dataService.insertData(data);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'my-component-2',
                        template: "\n        <h1>Component 2</h1>\n        <div>\n            <button (click)=\"onGetData()\">Get random data</button>\n            <p>Random data: {{data}}</p>\n            <input type=\"text\" #input>\n            <button (click)=\"onAddItem(input.value)\">Add</button>\n        </div>\n    ",
                        providers: [DataService]
                    }), 
                    __metadata('design:paramtypes', [Object])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});
//# sourceMappingURL=component2.component.js.map