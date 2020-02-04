import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes-app';
  section: string;

  setSection(section: string) {
    this.section = section;
    console.dir('setSection: '+section);
  }
}
