import {Component, OnInit} from "angular2/core";
import {ContactService} from "app/services/contact.service";
import {Router, RouteParams} from "angular2/router";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";

@Component({
    template: `
        Create a component
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
            <div>
                <div>
                 <label for="first-name">First Name:</label>
                    <input 
                        type="text" 
                        id="first-name"
                        [ngFormControl]="myForm.controls['firstName']"
                        >
                </div>
                <span *ngIf="!myForm.controls['firstName'].valid">Not valid</span>
                <div>
                     <label for="last-name">Last Name:</label>    
                     <input 
                        type="text" 
                        id="last-name" 
                        [ngFormControl]="myForm.controls['lastName']"
                        >
                </div> 
                <div>       
                     <label for="phone">Phone number:</label>
                    <input 
                        type="text" 
                        id="phone" 
                        [ngFormControl]="myForm.controls['phone']"
                        >
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        [ngFormControl]="myForm.controls['email']"
                        >
                </div>
            </div>   
            <button type="submit" [disabled]="!myForm.valid">Create contact</button>
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

    myForm: ControlGroup;

    constructor(private _contactService : ContactService,
                private _router : Router,
                private _routeParams :RouteParams,
                private _formBuilder : FormBuilder) {
    }

    onSubmit(newContactValue) {
        this._contactService.insertContact(newContactValue);
        this._router.navigate(["Contacts"]);
    }


    ngOnInit(): any {
        this.myForm = this._formBuilder.group({
            'firstName' : ['', Validators.required],
            'lastName' : [this._routeParams.get('lastName'), Validators.required],
            'phone' : ['', Validators.required],
            'email' : ['', Validators.required]
        });
    }
}