import {Component, OnInit} from "angular2/core";
import {PostService} from "../services/posts.service";
import {Post} from "./post";
// import {Post} from "./post";

@Component({
    selector: 'posts',
    template: `
        <!--<button (click)="onTestGet()">Test GET Request of Posts </button><br>-->
        <!--<p>Output: {{getData}}</p>-->
        <!--<button (click)="onTestPost()">Test POST Request</button><br>-->
        <!--posts-->
        <!--<p>Posts: {{posts}}</p>-->
        
        <h2>List of posts</h2>
        <div *ngFor="#post of posts">
            <p><b>{{post.title}}</b></p> 
            <p>{{post.body}}</p>
        </div>
    `
    ,
    providers: [PostService]
})
export class PostComponent implements OnInit {

    public posts:Post[];
    public selectedPost = null;

    constructor(private _postService:PostService) {

    }

    onSelect(post) {
        this.selectedPost = post;
    }

    getContacts() {
        this._postService.getPosts().then((posts:Post[])=>this.posts = posts);
    }

    ngOnInit():any {
        this.getContacts();
    }

}