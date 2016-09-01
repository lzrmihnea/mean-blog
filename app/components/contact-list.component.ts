import {Component, OnInit} from 'angular2/core';
import {ContactComponent} from "app/components/contact.component";
import {ContactService} from "app/services/contact.service";
import {Contact} from "app/components/contact";

@Component({
    selector: "contactList",
    template: `
            <ul>
                <li *ngFor="#contact of contacts"
                    (click)="onSelect(contact)"
                     [class.clicked]="selectedContact === contact"
                    >
                    {{contact.firstName}} {{contact.lastName | uppercase}}
                </li>
            </ul>
            <contact *ngIf="selectedContact !== null" [contact]="selectedContact"></contact>
           `,
    directives: [ContactComponent],
    providers: [ContactService],
    styleUrls: ["dev/contacts/contact-list.css"]
})

export class ContactListComponent implements OnInit {

    public contacts:Contact[];
    public selectedContact = null;

    constructor(private _contactService:ContactService) {

    }

    onSelect(contact) {
        this.selectedContact = contact;
    }

    getContacts() {
        this._contactService.getContacts().then((contacts:Contact[])=>this.contacts = contacts);
    }

    ngOnInit():any {
        this.getContacts();
    }
}