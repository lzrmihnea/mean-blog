import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from "rxjs/Observable";
import {Post} from "./components/post";

@Injectable()
export class PostService {
    constructor(private _http : Http) { }

    private postsUrl = "http://localhost:3000/.json";


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



    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError (error: any) {
        let errMsg = (error.message)
            ? error.message
            : error.status
            ? `${error.status} - ${error.statusText}`
            : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    // getContacts() {
    //     return Promise.resolve(CONTACTS);
    // }
    //
    // insertContact(_contact:Contact) {
    //     Promise.resolve(CONTACTS).then((contacts:Contact[]) => contacts.push(_contact));
    // }
}
