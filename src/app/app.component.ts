import { Component } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";

@Component({
	selector: 'app-menu',
	templateUrl: 'app.menu.component.html',
	styleUrls: ['./app.menu.component.css']
})
export class MenuComponent {}

@Component({
	selector: 'app-firstscreen',
	templateUrl: 'app.firstscreen.component.html',
	styleUrls: ['./app.firstscreen.component.css']
})
export class FirstScreenComponent {}

@Component({
	selector: 'app-review',
	templateUrl: 'app.review.component.html',
	styleUrls: ['./app.review.component.css']
})
export class ReviewComponent {}

@Component({
	selector: 'app-restscreen',
	templateUrl: 'app.restscreen.component.html',
	styleUrls: ['app.restscreen.component.css']
})
export class RestScreenComponent {}

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';
}
