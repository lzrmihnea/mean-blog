import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactListComponent} from '/app/components/contact-list.component';
import {NewContactComponent} from "app/components/new-contact.component";
import {HttpTestComponent} from "app/components/http-test.component";

@Component({ 
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contact</a>    
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
            <http-test></http-test>
        </div>
`,
    directives: [
        ContactListComponent,
        HttpTestComponent,
        ROUTER_DIRECTIVES
    ],
    styleUrls: ["./app/app.css"]
})
@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault:true},
    {path: '/newcontact', name: 'NewContact', component: NewContactComponent},
])
export class AppComponent {

}