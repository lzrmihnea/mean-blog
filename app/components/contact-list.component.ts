import {Component} from 'angular2/core';
import {ContactComponent} from "app/components/contact.component";

@Component({
    selector: "contactList",
    template: `
            <ul>
                <li *ngFor="#contact of contacts"
                    (click)="onSelect(contact)"
                     [class.clicked]="showDetail === true"
                    >
                    {{contact.firstname}} {{contact.lastname}}
                </li>
            </ul>
            <contact [contact]="selectedContact"></contact>       
    `,
    directives: [ContactComponent]
})

export class ContactListComponent {
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