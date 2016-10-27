System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/observable/throw', "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var PostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                    this.postsUrl = "http://localhost:3000/.json";
                }
                // getPosts(): Observable<Post[]> {
                //     // let header = new Headers({ 'Content-Type': 'application/json' });
                //     // let options = new RequestOptions({ headers: header });
                //
                //     // var req = new XMLHttpRequest();
                //     // req.open(type, url);
                //     // req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                //     // req.getAllResponseHeaders()
                //
                //
                //     return this._http.get(this.postsUrl)
                //         .map(this.extractData)
                //         .catch(this.handleError);
                // }
                PostService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body.data || {};
                };
                PostService.prototype.handleError = function (error) {
                    var errMsg = (error.message)
                        ? error.message
                        : error.status
                            ? error.status + " - " + error.statusText
                            : 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=posts.service.js.map