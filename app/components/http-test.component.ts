import {Component} from "angular2/core";
import {HttpTestService} from "../services/http-test.service";

@Component({
    selector: 'http-test',
    template: `
        <button (click)="onTestGet()">Test GET Request</button><br>
        <p>Output: {{getData}}</p>
        <button (click)="onTestPost()">Test POST Request</button><br>
        <p>Output: {{postData}}</p>
    `,
    providers: [HttpTestService]
})
export class HttpTestComponent {
    getData: string;
    postData: string;

    constructor(private _httpService : HttpTestService) { }

    onTestGet() {
        this._httpService.getCurrentTime().subscribe(
            data => this.getData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
    }

    onTestPost() {
        this._httpService.postJson()
            .subscribe(
                data => this.postData = JSON.stringify(data),
                error => alert(error),
                () => console.log("Finished")
            )
    }
}