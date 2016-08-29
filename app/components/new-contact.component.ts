import {Component, OnInit} from "angular2/core";
import {ContactService} from "app/services/contact.service";
import {Contact} from "app/components/contact";
import {Router, RouteParams} from "angular2/router";

@Component({
    template: `
        Create a component
        
        <div>
                <div>
                 <label for="first-name">First Name:</label>
                    <input type="text" id="first-name" #firstName>
                </div>
                <div>
                     <label for="last-name">Last Name:</label>    
                     <input type="text" id="last-name" #lastName value="{{passedLastName}}">
                </div> 
                <div>       
                     <label for="phone">Phone number:</label>
                    <input type="text" id="phone" #phone>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="text" id="email" #email>
                </div>
            </div>   
            <button (click)="onAddContact(
                firstName.value,
                lastName.value,
                phone.value,
                email.value
            )">Create contact</button>
    `,
    styles: [`
        label {
        display: inline-block;
        width: 140px;
        }
        
        input {
            width: 250px;
        }
    `],
    providers: [ContactService]
})
export class NewContactComponent implements OnInit {

    public passedLastName = "";

    constructor(
        private _contactService:ContactService,
        private _router: Router,
        private _routeParams: RouteParams) { }

    onAddContact(
        firstName,
        lastName,
        phone,
        email
    ) {
        let contact:Contact = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };
        this._contactService.insertContact(contact);
        this._router.navigate(["Contacts"]);
    }

    ngOnInit() {
        this.passedLastName = this._routeParams.get('lastName');
    }
}