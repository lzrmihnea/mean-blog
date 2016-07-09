import {Component} from 'angular2/core';
import {CourseService} from '/app/services/courses.service';
import {AutoGrowDirective} from "/app/directive/auto-grow.directive";

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{titles}}
    <input type="text" autoGrow/>
    <ul>
        <li *ngFor="#course of courses">
        {{course}}
        </li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "The title of the courses page";
    courses;

    constructor(courseService : CourseService) {
        this.courses = courseService.getCourses();
    }
}