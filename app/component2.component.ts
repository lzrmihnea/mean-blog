import {Component} from "angular2/core";
@Component({
    selector: 'my-component-2',
    template: `
        <h1>Component 2</h1>
        <div>
            <button (click)="onGetData()">Get random data</button>
            <p>Random data: {{data}}</p>
            <input type="text" #input>
            <button (click)="onAddItem(input.value)">Add</button>
        </div>
    `
})
export class Component2Component {
    data: string;

    constructor(private _dataService: DataService) {}

    onGetData() {
        this.data = this._dataService.getRandomData();
    }

    onAddItem(data: string) {
        this._dataService.insertData(data);
    }
}