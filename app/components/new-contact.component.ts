import {Component, OnInit} from "angular2/core";
import {ContactService} from "app/services/contact.service";
import {Contact} from "app/components/contact";
import {Router, RouteParams} from "angular2/router";

@Component({
    template: `
        Create a component
        <form #myForm="ngForm">
            <div>
                <div>
                 <label for="first-name">First Name:</label>
                    <input 
                        type="text" 
                        id="first-name"
                        ngControl="firstName"
                        [(ngModel)]="newContact.firstName"
                        required
                        >
                </div>
                <div>
                     <label for="last-name">Last Name:</label>    
                     <input 
                        type="text" 
                        id="last-name" 
                        ngControl="lastName"
                        [(ngModel)]="newContact.lastName"
                        required
                        >
                </div> 
                <div>       
                     <label for="phone">Phone number:</label>
                    <input 
                        type="text" 
                        id="phone" 
                        ngControl="phone"
                        [(ngModel)]="newContact.phone"
                        required
                        >
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        ngControl="email"
                        [(ngModel)]="newContact.email"
                        required
                        >
                </div>
            </div>   
            <button type="submit" [disabled]="!myForm.form.valid">Create contact</button>
        </form>
    `,
    styles: [`
        label {
        display: inline-block;
        width: 140px;
        }
        
        input {
            width: 250px;
        }
        
        .ng-invalid.ng-touched{
            border: 1px solid red;
        }
    `],
    providers: [ContactService]
})
export class NewContactComponent implements OnInit {

    newContact: Contact;

    constructor(private _contactService:ContactService,
                private _router:Router,
                private _routeParams:RouteParams) {
    }

    onSubmit() {
        this._contactService.insertContact(this.newContact);
        this._router.navigate(["Contacts"]);
    }


    ngOnInit(): any{
        this.newContact = {
            firstName : '',
            lastName : this._routeParams.get('lastName'),
            phone : '',
            email : ''
        };
}