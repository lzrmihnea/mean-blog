import {Component} from "angular2/core";

@Component({
    selector: 'child',
    template: `<h2>Child</h2>
    <p>Value entered in parent component: {{parentValue}}</p>
    <input type="text"><br>
    <button>Click me</button>
`,
    inputs: ['parentValue']
})
export class ChildComponent {
    parentValue : string;
}