import {Component} from 'angular2/core';
import {CoursesComponent} from '/app/components/courses.component';
import {AuthorsComponent} from '/app/components/authors.component';
import {TopbarComponent} from '/app/components/topbar.component';
import {ContactListComponent} from "/app/components/contact-list.component";

@Component({
    selector: 'my-app',
    template: `
<topbar></topbar> 
<h1>Hello Angular jajaja</h1> 
<div>The title of courses page</div>
<courses></courses>
<authors></authors>
<contactList></contactList>
`,
    directives: [CoursesComponent, TopbarComponent, AuthorsComponent, ContactListComponent]
})
export class AppComponent {
}