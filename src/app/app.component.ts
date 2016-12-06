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
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';
}
