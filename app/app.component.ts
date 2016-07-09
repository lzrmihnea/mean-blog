import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactListComponent} from '/app/components/contact-list.component';

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
        </div>
`,
    directives: [
        ContactListComponent,
        ROUTER_DIRECTIVES
    ],
    styleUrls: ["app/app.css"]
})
@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactListComponent},
    {path: '/newcontact', name: 'NewContact', component: ContactListComponent},
])
export class AppComponent {

}