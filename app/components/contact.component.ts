import {Component} from 'angular2/core';

@Component({
    selector: 'contact',
    template: `
            <input [(ngModel)] = "contact.firstName" type="text">
            <div>
                Phone number: {{contact.phoneNumber}}<br>
                Email: {{contact.email}}
            </div>     
            `,
    inputs: ["contact"]
})

export class ContactComponent {

    public contact = {};

}