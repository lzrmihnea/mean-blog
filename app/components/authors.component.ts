import {Component} from 'angular2/core';

@Component({
    selector: 'authors',
    template: `
    <ul>
        <li *ngFor="#contact of contacts"
            (click)="onSelect(contact)"
             [class.clicked]="showDetail === true"
            >
            {{contact.firstname}} {{contact.lastname}}
        </li>
    </ul>
    <input [(ngModel)] = "selectedContact.firstName" type="text">
    <div>
        Phone number: {{selectedContact.phoneNumber}}<br>
        Email: {{selectedContact.email}}
    </div>

`
})
export class AuthorsComponent {
    public contacts = [{
        firstname: "Dan",
        lastname: "Blitz",
        phoneNumber: "002352",
        email: "this@email.com"
    },
        {
            firstname: "Max",
            lastname: "Ching",
            phoneNumber: "0069",
            email: "this@emaix.com"
        }];

    public selectedContact = {};
    onSelect(contact) {
        this.selectedContact = contact;
    }
}