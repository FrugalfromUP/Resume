import { Component } from '@angular/core';//package

@Component({//Decorator
  selector: 'app-root',//selector is use to call component also working as tag eg h1 tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
}
