System.register(["angular2/core", "../services/posts.service"], function(exports_1, context_1) {
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
    var core_1, posts_service_1;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            }],
        execute: function() {
            // import {Post} from "./post";
            PostComponent = (function () {
                function PostComponent(_postService) {
                    this._postService = _postService;
                    this.selectedPost = null;
                }
                PostComponent.prototype.onSelect = function (post) {
                    this.selectedPost = post;
                };
                PostComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._postService.getPosts().then(function (posts) { return _this.posts = posts; });
                };
                PostComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        template: "\n        <!--<button (click)=\"onTestGet()\">Test GET Request of Posts </button><br>-->\n        <!--<p>Output: {{getData}}</p>-->\n        <!--<button (click)=\"onTestPost()\">Test POST Request</button><br>-->\n        <!--posts-->\n        <!--<p>Posts: {{posts}}</p>-->\n        \n        <h2>List of posts</h2>\n        <div *ngFor=\"#post of posts\">\n            <p><b>{{post.title}}</b></p> \n            <p>{{post.body}}</p>\n        </div>\n    ",
                        providers: [posts_service_1.PostService]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostService])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map