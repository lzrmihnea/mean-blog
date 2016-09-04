import {Component} from "angular2/core";
@Component({
    selector: 'my-component-1',
    template: `
        <h1>Component 1</h1>
        <div>
            <button>Get random data</button>
            <p>Random data: {{data}}</p>
            <input type="text" #input>
            <button (click)="onAddItem(input.value)">Add</button>
        </div>
    `
})
export class Component1Component {
    data: string;

    onAddItem(data: string) {
        
    }
}