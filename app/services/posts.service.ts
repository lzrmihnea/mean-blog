import {Injectable} from "angular2/core";
import {Post} from "app/components/post";
import {POSTS} from "/app/components/mock-posts";

@Injectable()
export class PostService {

    getPosts() {
        return Promise.resolve(POSTS);
    }

    insertPost(_post:Posts) {
        Promise.resolve(POSTS).then((posts:Post[]) => posts.push(_post));
    }
}
