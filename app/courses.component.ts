import {Component} from 'angular2/core'
import {CourseService} from './courses.service'

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{titles}}
    <ul>
        <li *ngFor="#course of courses">
        {{course}}
        </li>
    </ul>
    `,
    providers: [CourseService]
})
export class CoursesComponent {
    title = "The title of the courses page";
    courses;

    constructor(courseService : CourseService) {
        this.courses = courseService.getCourses();
    }
}