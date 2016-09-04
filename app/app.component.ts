import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactListComponent} from '/app/components/contact-list.component';
import {NewContactComponent} from "app/components/new-contact.component";
import {HttpTestComponent} from "app/components/http-test.component";
import {ChildComponent} from "./child-component";

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
            <div class="pipes">
                <h2>Date Pipe</h2>
                <div>
                    {{date | date}}
                </div>
                <h2>Number pipe</h2>
                <div>
                    {{4.566 | number:'1.2-2'}}
                </div>
                <h2>Currency Pipe</h2>
                <div>
                    {{ 15.99 | currency:'EUR':true}}    
                </div>
                <h2>Stateful Pipe</h2>
                <div>{{randomData | async}}</div>
            </div>
            <div class="parent">
                <h1>Parent</h1>
                <p>Value entered in child component: {{childValue}}</p>
                <input type="text" #parentInput (keyup)="0"><br>
                <div class="child">
                    <child [parentValue]="parentInput.value"
                        (childChanged)="childValue=$event"></child>
                </div>
            </div>
        </div>
`,
    directives: [
        ContactListComponent,
        HttpTestComponent,
        ROUTER_DIRECTIVES,
        ChildComponent
    ],
    styleUrls: ["./app/app.css"]
})
@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault:true},
    {path: '/newcontact', name: 'NewContact', component: NewContactComponent},
])
export class AppComponent {
    date = new Date();
    childValue: string;
    randomData = new Promise((resolve, reject)=>{
        setTimeout(() => resolve('Random data!'),1000);
    });
}